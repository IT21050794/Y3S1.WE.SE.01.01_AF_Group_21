const Citizen = require('../../../models/Citizen');
const User = require('../../../models/User');
const Bid = require('../../../models/Bid');
const Tender = require('../../../models/Tender');

exports.createBid = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;
    const tenderId = req.body.tender;
    const bid = {
        email: req.body.email,
        companyName: req.body.companyName,
        contactNo: req.body.contactNo,
        bidAmount: req.body.bidAmount,
        citizen: userId,
        tender: tenderId,      
    };

    try{
        const citizen = await Citizen.findById(userId);
        if(!citizen){
            return res.status(404).json({ error: 'user not found' });
        }

        if(currentUserRole === 'citizen'){
            const newBid = await Bid.create(bid);

            if(!newBid){
                return res.status(500).json({ error: 'create bid failed' });
            }

            const tender = await Tender.findById(tenderId);

            tender.bids.push(newBid);

            const savedTender = await tender.save();

            if(!savedTender){
                return res.status(500).json({ error: 'adding bid to tender failed' });
            }

            return res.status(200).json({ newBid });
        }else{
            return res.status(403).json({ error: 'access denied' });
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getAllBidByUser = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const userId = user._id;

    try{
        if(currentUserRole === 'citizen'){
            const citizen = await Citizen.findById(userId);
            if(!citizen){
                return res.status(404).json({ error: 'user not found' });
            }

            const bids = await Bid.find({ citizen: userId });
            if(bids === null){
                return res.status(200).json({ error: 'no tenders for the user' });
            }

            return res.status(200).json({ bids });
        }else{
            return res.status(403).json('access denied');
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getBidsByTender = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const tenderId = req.params.id;

    try{
        if(currentUserRole === 'employee'){
            const tender = await Tender.findById(tenderId);
            const bidIds =  tender.bids;

            let tenderBids = [];

            await Promise.all(bidIds.map(async bidId => {
                bid = await Bid.findById(bidId);
                tenderBids.push(bid);
            }));

            return res.status(200).json({ tenderBids });
        }else{
            return res.status(403).json('access denied');
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.deleteBid = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;
    const bidId = req.params.id;

    try{
        if(currentUserRole === 'citizen'){
            const bid = await Bid.findById(bidId);
            const tenderId = bid.tender;
            if(!bid){
                return res.status(200).json({ error: 'bid is not available' });
            }

            const deletedBid = await Bid.findOneAndDelete(bidId);
    
            if(!deletedBid){
                return res.status(500).json({ error: 'bid deletion failed' });
            }
    
            const removedFromTender = await Tender.updateOne({ _id: tenderId }, { $pull: { bids: bidId }});
    
            if(!removedFromTender){
                return res.status(500).json({ error: 'payment method deletion from user failed' });
            }
    
            res.status(204).json({ deletedBid });
        }else{
            return res.status(403).json({ error: 'access denied' });
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.updateBidStatus = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const bidId = req.params.id;
    const bidStatus = req.body.bidStatus;

    try{
        if(currentUserRole === 'employee'){

            const bid = await Bid.findById(bidId);
            if(!bid){
                return res.status(200).json({message: 'bid not available'});
            }

            tenderId = bid.tender;

            const tender = await Tender.findById(tenderId);
            const bidIds =  tender.bids;

            await Promise.all(bidIds.map(async bidId => {
                await Bid.updateMany({ tender: tenderId }, { status: 'rejected' });
            }));

            //add pdf after implementing pdf upload feature
            const newBidDetails = {
                email: bid.email,
                company: bid.company,
                contactNo: bid.contactno,
                bidAmount: bid.bidAmount,
                status: bidStatus,
                citizen: bid.citizen,
                tender: bid.tender,
                date: bid.date
            };

            const updatedBid = await Bid.findOneAndUpdate(
                {_id: bidId },
                newBidDetails,
                { new: true }
            );

            if(!updatedBid){
                return res.status(400).json({error: 'Bid update failed'});
            }

            return res.status(200).json({ updatedBid });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}