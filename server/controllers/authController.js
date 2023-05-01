const User = require('../models/User');
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


module.exports.signup_get = (req, res) => {

    res.json('signup');

}

module.exports.login_get = (req, res) => {

    res.json('login');

}

module.exports.signup_post = async (req, res) => {

    const { email, password } = req.body;

    try{
        const newUser = await User.create({ email, password });
        const token = createToken(newUser._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json(newUser._id);
    }catch(error){
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }

}

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