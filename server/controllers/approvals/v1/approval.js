const Approval = require('../../../models/Approval');
const User = require('../../../models/User');
const Citizen = require('../../../models/Citizen');
const fs = require('fs');

exports.createApproval = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;
    const pdf = req.file.filename;
    const approval = {
        approvalType: req.body.approvalType,
        citizenEmail: req.body.citizenEmail,
        pdf: pdf,
        citizen: userId
    }

    try{
        const citizen = await Citizen.findById(userId);

        if(!citizen){
            return res.status(404).json({ error: 'user not found' });
        }

        if(currentUserRole === 'citizen'){
            const newApproval = await Approval.create(approval);

            if(!newApproval){
                return res.status(500).json({ error: 'create tender failed'});
            }

            return res.status(200).json({ newApproval });
        }else{
            return res.status(403).json({ error: 'access denied' });
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getApprovalsByUser = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'citizen'){
            const citizen = await Citizen.findById(userId);
            if(!citizen){
                return res.status(404).json({ error: 'user not found' });
            }

            const approvals = await Approval.find({citizen: userId});
            if(!approvals){
                return res.status(200).json({message: 'no approvals for the user'});
            }

            return res.status(200).json({ approvals });
        }else{
            return res.status(403).json('access denied'); 
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.deleteApproval = async (req, res) => {

    const user = res.locals.user;
    const approvalId = req.params.id;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'citizen'){
            const approval = await Approval.findById(approvalId);
            if(!approval){
                return res.status(200).json({ error: 'approval not available' });
            }

            const deletedApproval = await Approval.findOneAndDelete(approvalId);
    
            if(!deletedApproval){
                return res.status(500).json('approval deletion failed');
            }
    
            res.status(204).json({ deletedApproval });
        }else{
            return res.status(403).json('access denied');
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getPendingApprovals = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee'){
            const user = await User.findById(userId);
            if(!user){
                return res.status(404).json({ error: 'user not found' });
            }

            const approvals = await Approval.find({status: 'pending'});
            if(!approvals){
                return res.status(200).json({message: 'no pending approvals'});
            }

            return res.status(200).json({ approvals });
        }else{
            return res.status(403).json('access denied'); 
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.downloadCitizenDocument = async (req, res) => {

    const approvalId = req.params.id
    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee' || currentUserRole === 'citizen'){
            const approval = await Approval.findById(approvalId);

            if(!approval) {
                return res.status(404).json({ error: 'approval not found' });
            }

            const pdf = approval.pdf;
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

exports.approveApproval = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const approvalId = req.params.id;
    const approvalPdf = req.file.filename;
    const approvalStatus = 'approved';

    try{
        if(currentUserRole === 'employee'){

            const approval = await Approval.findById(approvalId);
            if(!approval){
                return res.status(200).json({message: 'approval not available'});
            }

            const newApprovalDetails = {
                approvalType: approval.approvalType,
                citizenEmail: approval.citizenEmail,
                pdf: approval.pdf,
                status: approvalStatus,
                approvalPdf: approvalPdf,
                citizen: approval.citizen,
                date: approval.date
            };

            const acceptedApproval = await Approval.findOneAndUpdate(
                {_id: approvalId },
                newApprovalDetails,
                { new: true }
            );

            if(!acceptedApproval){
                return res.status(400).json({error: 'approval update failed'});
            }

            return res.status(200).json({ acceptedApproval });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.downloadGovDocument = async (req, res) => {

    const approvalId = req.params.id
    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee' || currentUserRole === 'citizen'){
            const approval = await Approval.findById(approvalId);

            if(!approval) {
                return res.status(404).json({ error: 'approval not found' });
            }

            const pdf = approval.approvalPdf;

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

exports.rejectApproval = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const approvalId = req.params.id;
    const approvalStatus = 'rejected';

    try{
        if(currentUserRole === 'employee'){

            const approval = await Approval.findById(approvalId);
            if(!approval){
                return res.status(200).json({message: 'approval not available'});
            }

            const newApprovalDetails = {
                approvalType: approval.approvalType,
                citizenEmail: approval.citizenEmail,
                pdf: approval.pdf,
                status: approvalStatus,
                citizen: approval.citizen,
                date: approval.date
            };

            const rejectedApproval = await Approval.findOneAndUpdate(
                {_id: approvalId },
                newApprovalDetails,
                { new: true }
            );

            if(!rejectedApproval){
                return res.status(400).json({error: 'approval update failed'});
            }

            return res.status(200).json({ rejectedApproval });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}