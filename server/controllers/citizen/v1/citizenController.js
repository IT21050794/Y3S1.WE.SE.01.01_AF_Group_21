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
            res.status(404).json({ error: 'user not found'});
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

                res.status(200).json({ updatedCitizen });

            }
            else{
                res.status(403).json('access denied');
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
                return res.status(404).json('user not found');
            }
    
            res.status(200).json({ citizen });
        }else{
            res.status(403).json('access denied');
        }

    }catch(error){
        res.status(400).json({ error });
    }

}

exports.deleteCitizen = async (req, res) => {

    const user = res.locals.user;
    const id = user._id;

    try{

        if(user.role === 'citizen'){
            const citizen = await Citizen.findOneAndDelete(id);

            if(!citizen){
                return res.status(404).json('user not found');
            }

            const user = await User.findOneAndDelete(id);

            if(!user){
                return res.status(404).json('user not found');
            }
    
            res.status(204).json('user deleted');
        }else{
            res.status(403).json('access denied');
        }

    }catch(error){
        res.status(400).json({ error });
    }

}

exports.getAllCitizens = async(req, res) => {

    try{
        const citizens = await Citizen.find({});
        
        if(!citizens){
            res.status(404).json('no users available');
        }

        res.status(200).json({ citizens });
    }catch(error){
        res.status(400).json({ error });
    }

}