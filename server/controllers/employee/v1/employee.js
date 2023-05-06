const User = require('../../../models/User');
const mongoose = require('mongoose');

exports.updateEmployee = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const empId = req.params.id;
    const newEmpDetails = req.body;

    try{
        if(currentUserRole === 'admin'){
            const employee = await User.findById(empId);

            if(!employee){
                return res.status(404).json({ error: 'user not found' });
            }

            const updatedEmployee = await User.findOneAndUpdate(
                { _id: empId },
                newEmpDetails,
                { new: true }
            );

            if(!updatedEmployee){
                return res.status(400).json({error: 'user update failed'});
            }

            return res.status(200).json({ updatedEmployee });
        }else{
            return res.status(403).json({ error: 'access denied' });
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getAllEmployees = async(req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'admin'){
            const employees = await User.find({ role: 'employee' });
        
            if(!employees){
                return res.status(404).json({ error: 'no users available' });
            }
    
            return res.status(200).json({ employees });
        }else{
            return res.status(403).json({error: 'access denied'})
        }

    }catch(error){
        return res.status(400).json({ error });
    }

}

exports.deleteEmployee = async (req, res) => {

    const user = res.locals.user;
    const curretnUserRole = user.role;
    const empId = req.params.id;

    try{

        if(curretnUserRole === 'admin'){
            const employee = await User.findById(empId);

            if(!employee){
                return res.status(404).json({ error:'user not found' });
            }

            const deletedEmployee = await User.findOneAndDelete(empId);
    
            return res.status(204).json({ message: 'user deleted' });
        }else{
            return res.status(403).json({ error:'access denied' });
        }

    }catch(error){
        return res.status(400).json({ error });
    }

}

exports.getEmployee = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const empId = req.params.id;

    try{

        if(currentUserRole === 'admin'){
            const employee = await User.findById(empId);

            if(!employee){
                return res.status(404).json({ error:'user not found' });
            }
    
            return res.status(200).json({ employee });
        }else{
            return res.status(403).json({ error: 'access denied' });
        }

    }catch(error){
        return res.status(400).json({ error });
    }

}