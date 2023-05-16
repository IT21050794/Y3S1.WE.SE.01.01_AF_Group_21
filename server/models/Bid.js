const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const bidStatus = ['accepted', 'rejected', 'processing'];

const bidSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        validate: [isEmail, 'please enter a valid email']
    },
    companyName: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    bidAmount: {
        type: Number,
        required: true
    },
    pdf: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: bidStatus,
        default: 'processing'
    },
    citizen: {
        type: Schema.Types.ObjectId,
        ref: 'citizen'
    },
    tender:{
        type: Schema.Types.ObjectId,
        ref: 'tender'
    },
    date: {
        type: Date,
        default: Date.now(),
    },

})

const Bid = mongoose.model('bid', bidSchema);
module.exports = Bid;