const Citizen = require('../../../models/Citizen');
const PaymentMethod = require('../../../models/PaymentMethod');

exports.createPaymentMethod = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const paymentMethod = {
        cardHoldersName: req.body.cardHoldersName,
        cardNumber: req.body.cardNumber,
        expirationDate: req.body.expirationDate,
        cvv: req.body.cvv,
        citizen: userId
    };

    try{
        const citizen = await Citizen.findById(userId);

        if(!citizen){
            return res.status(404).json({ error: 'user not found' });
        }else{
            const currentUserRole = user.role;

            if(currentUserRole === 'citizen'){
                const newPaymentMethod = await PaymentMethod.create(paymentMethod);

                if(!newPaymentMethod){
                    return res.status(500).json({ error: 'create payment method failed' });
                }

                const paymentMethodId = newPaymentMethod._id;

                citizen.paymentMethods.push(paymentMethodId);

                const userSaved = await citizen.save();

                if(!userSaved){
                    return res.status(500).json({ error: 'adding payment method to user failed' });
                }

                return res.status(200).json({ newPaymentMethod });
            }else{
                return res.status(403).json({ error: 'access denied' });
            }
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.deletePaymentMethod = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const payMethodId = req.params.id;

    try{
        if(user.role === 'citizen'){
            const paymentMethod = await PaymentMethod.findById(payMethodId);
            if(!paymentMethod){
                return res.status(404).json('payment method not found');
            }

            const deletedPayMenthod = await PaymentMethod.findOneAndDelete(payMethodId);
    
            if(!deletedPayMenthod){
                return res.status(500).json('payment method deletion failed');
            }
    
            const removedFromUser = await Citizen.updateOne({ _id: userId }, { $pull: { paymentMethods: payMethodId }})
    
            if(!removedFromUser){
                return res.status(500).json('payment method deletion from user failed');
            }
    
            res.status(204).json({ deletedPayMenthod });
        }else{
            return res.status(403).json('access denied');
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getPayMethodsByUser = async (req, res) => {
    
    const user = res.locals.user;
    const userId = user._id;

    try{
        if(user.role === 'citizen'){
            const citizen = await Citizen.findById(userId);
            if(!citizen){
                return res.status(404).json({ error: 'user not found' });
            }

            let payMethodIds = citizen.paymentMethods;
            console.log(payMethodIds);

            let userPaymentMethods = [];

            await Promise.all(payMethodIds.map(async methodId => {
                payMethod = await PaymentMethod.findById(methodId);
                userPaymentMethods.push(payMethod);
            }));

            if(userPaymentMethods === null){
                return res.status(200).json("no payment methods registered for the user");
            }

            return res.status(200).json({ userPaymentMethods });

        }else{
            return res.status(403).json('access denied');
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}