const Citizen = require('../../../models/Citizen');
const User = require('../../../models/User');
const Complain = require('../../../models/Complain');
const fs = require('fs');
const mime = require('mime');

exports.createComplain = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;
    const image = req.file.filename;
    const complain = {
        issueLocation: req.body.issueLocation,
        natureOfComplain: req.body.natureOfComplain,
        severity: req.body.severity,
        image: image,
        description: req.body.description,
        email: req.body.email,
        citizen: userId,
    };
    
    try{
        const citizen = await Citizen.findById(userId);

        if(!citizen){
            return res.status(404).json({ error: 'user not found' });
        }else{
            if(currentUserRole === 'citizen'){
                const newComplain = await Complain.create(complain);

                if(!newComplain){
                    return res.status(500).json({ error: 'create complain failed' });
                }

                return res.status(200).json({ newComplain });
            }else{
                return res.status(403).json({ error: 'access denied' });
            }
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.downloadPicture = async (req, res) => {

    const complainId = req.params.id
    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee' || currentUserRole === 'citizen'){
            const complain = await Complain.findById(complainId);

            if(!complain) {
                return res.status(404).json({ error: 'complain not found' });
            }

            const image = complain.image;

            const filePath = `uploads/${image}`

            if (!fs.existsSync(filePath)) {
                return res.status(404).json({ error: 'image not found' });
            }

            // get the MIME type for the image based on its file extension
            const mimeType = mime.getType(image);

            // set the Content-Type header to the image's MIME type
            res.setHeader('Content-Type', mimeType);
            res.setHeader('Content-Disposition', `attachment; filename=${image}`);
        
            const stream = fs.createReadStream(filePath);
            stream.pipe(res);
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.error(error);
        return res.status(500).json({ error });
    }
}

exports.getComplainsByUser = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'citizen'){
            const citizen = await Citizen.findById(userId);
            if(!citizen){
                return res.status(404).json({ error: 'user not found' });
            }

            const complains = await Complain.find({citizen: userId});
            if(!complains){
                return res.status(200).json({message: 'no complains for the user'});
            }

            return res.status(200).json({ complains });
        }else{
            return res.status(403).json('access denied'); 
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getPendingComplains = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee'){
            const complains = await Complain.find({status: 'pending'});

            if(complains === null){
                return res.status(200).json({ message: 'no pending complains available' });
            }

            return res.status(200).json({ complains });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error.message})
    }

}

exports.getReviewingComplains = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee'){
            const complains = await Complain.find({status: 'reviewing'});

            if(complains == null){
                return res.status(200).json({ message: 'no reviewing complains available' });
            }

            return res.status(200).json({ complains });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error.message})
    }

}

exports.updateComplainStatus = async (req, res) => {
 
    const user = res.locals.user;
    const currentUserRole = user.role;
    const complainId = req.params.id;
    const complainStatus = req.body.compStatus;

    try{
        if(currentUserRole === 'employee'){

            const complain = await Complain.findById(complainId);
            if(!complain){
                return res.status(200).json({message: 'complain not available'});
            }

            //add pdf after implementing pdf upload feature
            const newComplainDetails = {
                issueLocation: complain.issueLocation,
                natureOfComplain: complain.natureOfComplain,
                severity: complain.severity,
                image: complain.image,
                description: complain.description,
                email: complain.email,
                status: complainStatus,
                citizen: complain.citizen,
                response: complain.response,
                date: complain.date
            };

            const updatedComplain = await Complain.findOneAndUpdate(
                {_id: complainId },
                newComplainDetails,
                { new: true }
            );

            if(!updatedComplain){
                return res.status(400).json({error: 'complain update failed'});
            }

            return res.status(200).json({ updatedComplain });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.resolveComplain = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const complainId = req.params.id;
    const complainStatus = 'resolved';
    const complainResponse = req.body.response;

    try{
        if(currentUserRole === 'employee'){

            const complain = await Complain.findById(complainId);
            if(!complain){
                return res.status(200).json({message: 'complain not available'});
            }

            //add pdf after implementing pdf upload feature
            const newComplainDetails = {
                issueLocation: complain.issueLocation,
                natureOfComplain: complain.natureOfComplain,
                severity: complain.severity,
                image: complain.image,
                description: complain.description,
                email: complain.email,
                status: complainStatus,
                citizen: complain.citizen,
                response: complainResponse,
                date: complain.date
            };

            const updatedComplain = await Complain.findOneAndUpdate(
                {_id: complainId },
                newComplainDetails,
                { new: true }
            );

            if(!updatedComplain){
                return res.status(400).json({error: 'complain update failed'});
            }

            return res.status(200).json({ updatedComplain });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getAllComplains = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'admin'){
            const complains = await Complain.find({});

            if(complains == null){
                return res.status(200).json({ message: 'no complains available' });
            }

            return res.status(200).json({ complains });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error.message})
    }

}

exports.deleteComplain = async (req, res) => {

    const user = res.locals.user;
    const complainId = req.params.id;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'citizen' || currentUserRole === 'admin'){
            const complain = await Complain.findById(complainId);
            if(!complain){
                return res.status(200).json({ error: 'complain not available' });
            }

            const deletedComplain = await Complain.findOneAndDelete(complainId);
    
            if(!deletedComplain){
                return res.status(500).json('complain deletion failed');
            }
    
            return res.status(204).json({ deletedComplain });
        }else{
            return res.status(403).json('access denied');
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}