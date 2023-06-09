const Citizen = require('../../../models/Citizen');
const PaymentMethod = require('../../../models/PaymentMethod');
const Payment = require('../../../models/payment');
const fs = require('fs');

exports.createPayment = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const pdf = req.file.filename;
    const payment = {
        paymentReason: req.body.paymentReason,
        paymentDetailsId: req.body.paymentDetailsId,
        amount: req.body.amount,
        pdf: pdf,
        citizen: userId,
    };
    
    try{
        const citizen = await Citizen.findById(userId);

        if(!citizen){
            return res.status(404).json({ error: 'user not found' });
        }else{
            const currentUserRole = user.role;

            if(currentUserRole === 'citizen'){
                const newPayment = await Payment.create(payment);

                if(!newPayment){
                    return res.status(500).json({ error: 'create payment failed' });
                }

                return res.status(200).json({ newPayment });
            }else{
                return res.status(403).json({ error: 'access denied' });
            }
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getPaymentsByUser = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'citizen'){
            const citizen = await Citizen.findById(userId);
            if(!citizen){
                return res.status(404).json({ error: 'user not found' });
            }

            const payments = await Payment.find({citizen: userId});
            if(!payments){
                return res.status(200).json({message: 'no payments for the user'});
            }

            return res.status(200).json({ payments });
        }else{
            return res.status(403).json('access denied'); 
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getAllPayments = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee'){
            const payments = await Payment.find({});

            return res.status(200).json({ payments });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error.message})
    }

}

exports.downloadDocument = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee' || currentUserRole === 'citizen'){
            const payment = await Payment.findById(req.params.id);

            if(!payment) {
                return res.status(404).json({ error: 'payment not found' });
            }

            const filePath = `uploads/${payment.pdf}`

            if (!fs.existsSync(filePath)) {
                return res.status(404).json({ error: 'PDF not found' });
            }

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=${payment.pdf}`);
        
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

exports.updatePaymentStatus = async (req, res) => {
 
    const user = res.locals.user;
    const currentUserRole = user.role;
    const paymentId = req.params.id;
    const paymentStatus = req.body.paymentStatus;

    try{
        if(currentUserRole === 'employee'){

            const payment = await Payment.findById(paymentId);
            if(!payment){
                return res.status(200).json({message: 'payment not available'});
            }

            //add pdf after implementing pdf upload feature
            const newPaymentDetails = {
                paymentReason: payment.paymentReason,
                paymentDetailsId: payment.paymentDetailsId,
                amount: payment.amount,
                date: payment.date,
                pdf: payment.pdf,
                citizen: payment.citizen,
                status: paymentStatus
            };

            const updatedPayment = await Payment.findOneAndUpdate(
                {_id: paymentId },
                newPaymentDetails,
                { new: true }
            );

            if(!updatedPayment){
                return res.status(400).json({error: 'payment update failed'});
            }

            return res.status(200).json({ updatedPayment });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}