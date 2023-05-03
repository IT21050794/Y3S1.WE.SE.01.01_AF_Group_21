const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const bidStatus = ['approved', 'rejected', 'pending'];

const approvalSchema = new mongoose.Schema({

    approvalType: {
        type: String,
        required: true,
    },
    citizenEmail: {
        type: String,
        required: true,
        validate: [isEmail, 'please enter a valid email']
    },
    pdf: {
        type:String
    },
    status: {
        type: String,
        enum: bidStatus,
        default: 'pending'
    },
    approvalPdf: {
        type: String
    },
    citizen: {
        type: Schema.Types.ObjectId,
        ref: 'citizen',
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    }

})

const Approval = mongoose.model('approval', approvalSchema);
module.exports = Approval;