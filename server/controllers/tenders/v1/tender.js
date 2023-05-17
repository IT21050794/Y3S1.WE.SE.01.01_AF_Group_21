const Tender = require('../../../models/Tender');
const User = require('../../../models/User');
const fs = require('fs');

exports.createTender = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;
    const pdf = req.file.filename;
    const tender = {
        inquiriesEmail: req.body.inquiriesEmail,
        projectDescription: req.body.projectDescription,
        tenderPeriod: req.body.tenderPeriod,
        pdf: pdf,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    }

    try{
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({ error: 'user not found' });
        }

        if(currentUserRole === 'employee'){
            const newTender = await Tender.create(tender);

            if(!newTender){
                return res.status(500).json({ error: 'create tender failed'});
            }

            return res.status(200).json({ newTender });
        }else{
            return res.status(403).json({ error: 'access denied' });
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.downloadDocument = async (req, res) => {

    const tenderId = req.params.id
    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee' || currentUserRole === 'citizen'){
            const tender = await Tender.findById(tenderId);

            if(!tender) {
                return res.status(404).json({ error: 'tender not found' });
            }

            const pdf = tender.pdf;
            const filePath = `uploads/${pdf}`

            if (!fs.existsSync(filePath)) {
                return res.status(404).json({ error: 'PDF not found' });
            }

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=${pdf}`);
        
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

exports.getAllTenders = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const userId = user._id;

    try{
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({ error: 'user not found' });
        }

        if(currentUserRole === 'citizen' || currentUserRole === 'employee'){
            const tenders = await Tender.find({});
            if(!tenders){
                return res.status(200).json({ message: 'No tenders available' });
            }

            return res.status(200).json({ tenders });
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}