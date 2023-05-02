const jwt = require('jsonwebtoken');
const User = require('../models/User');
const serverConfig = require('../config/serverConfig');

//authenticate user
const requireAuth = (req, res, next) => {

    const token = req.cookies.jwt;
    console.log('in require auth');
    //check json web token exsists & is verified
    if(token) {
        jwt.verify(token, serverConfig.JWT_SECRET, (err, decodedToken) => {
            if (err){
                console.log(err.message);
                res.status(400).json({ err });
            }else{
                next();
            }
        })
    }else {
        res.status(400).json('Invalid token');
    }

}

//check current user
const checkUser = (req, res, next) => {

    const token = req.cookies.jwt;

    console.log('in check user');
    if(token) {
        jwt.verify(token, serverConfig.JWT_SECRET, async (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.local.user = null;
                next();
            }else{
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    }else{
        res.locals.user = null;
        next();
    }

}

module.exports = { requireAuth, checkUser }