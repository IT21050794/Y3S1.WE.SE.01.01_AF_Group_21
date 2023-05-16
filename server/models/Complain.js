const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const compStatus = ['reviewing', 'resolved', 'pending'];

const complainSchema = new mongoose.Schema({

    issueLocation: {
        type: String,
        required: true,
    },
    natureOfComplain: {
        type: String,
        required: true,
    },
    severity: {
        type: Number,
        required: true,
        max: 5,
        min: 0
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'please enter a valid email']
    },
    status: {
        type: String,
        enum: compStatus,
        default: 'pending'
    },
    citizen: {
        type: Schema.Types.ObjectId,
        ref: 'citizen',
        required: true
    },
    response: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now(),
    }

})

const Approval = mongoose.model('complain', complainSchema);
module.exports = Approval;