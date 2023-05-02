const Citizen = require('../../../models/Citizen');
const User = require('../../../models/User');
const mongoose = require('mongoose');

exports.updateCitizen = async (req, res) => {

    const user = res.locals.user;
    const id = user._id;
    const newCitizenDetails = req.body;

    try{
        const citizen = await Citizen.findById(id);

        if(!citizen){
            return res.status(404).json({ error: 'user not found'});
        }else{
            const currentUserRole = user.role;

            if(currentUserRole === 'citizen') {

                const updatedCitizen = await Citizen.findOneAndUpdate(
                    { _id: id },
                    newCitizenDetails,
                    { new: true }
                );

                if(!updatedCitizen){
                    return res.status(400).json({error: 'user update failed'});
                }

                return res.status(200).json({ updatedCitizen });

            }
            else{
                return res.status(403).json({ error: 'access denied' });
            }
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getCitizen = async (req, res) => {

    const user = res.locals.user;
    const id = user._id;

    try{

        if(user.role === 'citizen'){
            const citizen = await Citizen.findById(id);

            if(!citizen){
                return res.status(404).json({ error:'user not found' });
            }
    
            return res.status(200).json({ citizen });
        }else{
            return res.status(403).json({ error: 'access denied' });
        }

    }catch(error){
        return res.status(400).json({ error });
    }

}

exports.deleteCitizen = async (req, res) => {

    const user = res.locals.user;
    const id = user._id;

    try{

        if(user.role === 'citizen'){
            const citizen = await Citizen.findOneAndDelete(id);

            if(!citizen){
                return res.status(404).json({ error:'user not found' });
            }

            const user = await User.findOneAndDelete(id);

            if(!user){
                return res.status(404).json({ error: 'user not found' });
            }
    
            return res.status(204).json({ message: 'user deleted' });
        }else{
            return res.status(403).json({ error:'access denied' });
        }

    }catch(error){
        return res.status(400).json({ error });
    }

}

exports.getAllCitizens = async(req, res) => {

    const user = res.locals.user;
    const curretnUserrole = user.role;

    try{
        if(currentUserRole === 'admin'){
            const citizens = await Citizen.find({});
        
            if(!citizens){
                return res.status(404).json({ error: 'no users available' });
            }
    
            return res.status(200).json({ citizens });
        }else{
            return res.status(403).json({error: 'access denied'})
        }

    }catch(error){
        return res.status(400).json({ error });
    }

}