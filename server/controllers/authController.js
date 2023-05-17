const User = require('../models/User');
const Citizen = require('../models/Citizen');
const jwt = require('jsonwebtoken');
const config = require('../config/serverConfig');

const maxAge = 3 * 24 * 60 * 60;

//handle the errors
const handleErrors = (err) => {

    let errors = { email: '', password: '' };

    //incorrect email
    if (err.message === 'incorrect email'){
        errors.email = 'Email is not registered';
    }

    //incorrect password
    if (err.message === 'incorrect password'){
        errors.email = 'Password is incorrect';
    }

    //duplicate error code
    if (err.code == 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    //validation errors
    if (err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message; 
        })
    }

    return errors;

}

//creating a jwt token
const createToken = (id) => {

    return jwt.sign({ id }, config.JWT_SECRET, {
        expiresIn: maxAge
    });

}

//create user
module.exports.signup_post = async (req, res) => {

    const userDetails = req.body;
    const genUser = { email: userDetails.email, password: userDetails.password, role: userDetails.role }

    try{
        const newUser = await User.create(genUser);

        if(newUser.role === 'citizen'){

            const citizen = {
                _id: newUser._id,
                email: newUser.email,
                password: newUser.password,
                role: newUser.role,
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                nic: userDetails.nic,
                contactNo: userDetails.contactNo,
                address: userDetails.address,
                dob: userDetails.dob
            }

            newCitizen = await Citizen.create(citizen);
        }

        const token = createToken(newUser._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json({ userID: newUser._id });
    }catch(error){
        console.log(error);
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }

}

//login a user
module.exports.login_post = async (req, res) => {

    const { email, password } = req.body;

    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(200).json({ user: user._id });
    }catch(error){
        console.log(error);
        const errors = handleErrors(error);
        console.log(errors);
        res.status(400).json({ errors });
    }

}

//for development purposes
module.exports.deleteAll = async (req, res) => {
    try {
        const result = await User.deleteMany();
        res.status(200).json({ result });
    } catch (err) {
        res.status(400).json({ error });
    }
}

//for development purposes
module.exports.getUser = async (req, res) => {

    const currentUser = res.locals.user;

    try{
        if(!currentUser){
            res.status(400).json('user not there');
        }

        res.status(200).json({ currentUser });
    }catch(error){
        res.status(400).json({ error });
    }


}

//logOut the user
module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.json('LoggedOut successfully');
}