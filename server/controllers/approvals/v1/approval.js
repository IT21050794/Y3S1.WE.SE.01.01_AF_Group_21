const Approval = require('../../../models/Approval');
const User = require('../../../models/User');
const Citizen = require('../../../models/Citizen');

//create an approval
exports.createApproval = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;
    const approval = {
        approvalType: req.body.approvalType,
        citizenEmail: req.body.citizenEmail,
        citizen: userId
    }

    try{
        const citizen = await Citizen.findById(userId);

        if(!citizen){
            return res.status(404).json({ error: 'user not found' });
        }

        //check if the current user is a citizen
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

//get approval requests done by a citizen
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

//delete an approval request
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

exports.updateApprovalsStatus = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const approvalId = req.params.id;
    const approvalStatus = req.body.approvalStatus;

    try{
        if(currentUserRole === 'employee'){

            const approval = await Approval.findById(approvalId);
            if(!approval){
                return res.status(200).json({message: 'approval not available'});
            }

            //add pdf after implementing pdf upload feature
            const newApprovalDetails = {
                approvalType: approval.approvalType,
                citizenEmail: approval.citizenEmail,
                status: approvalStatus,
                citizen: approval.citizen,
                date: approval.date
            };

            const updatedApproval = await Approval.findOneAndUpdate(
                {_id: approvalId },
                newApprovalDetails,
                { new: true }
            );

            if(!updatedApproval){
                return res.status(400).json({error: 'approval update failed'});
            }

            return res.status(200).json({ updatedApproval });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}