const mongoose = require('mongoose');
const User = require('./User');

//citizen schema
const citizenSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    nic: {
        type: String,
        required: true,
        maxlength: 13,
        minlength: 12
    },
    contactNo: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    address: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true
    },
    paymentMethods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'paymentmethod'
    }]
});

//const Citizen = User.discriminator('citizen', citizenSchema);
const Citizen = mongoose.model('citizen', citizenSchema);
module.exports = Citizen;