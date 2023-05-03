const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const tenderSchema = new mongoose.Schema({

    inquiriesEmail: {
        type: String,
        required: true,
        validate: [isEmail, 'please enter a valid email']
    },
    projectDescription: {
        type: String,
        required: true
    },
    tenderPeriod: {
        type: Number,
        required: true
    },
    pdf: {
        type:String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    bids: [
        {
            type: Schema.Types.ObjectId,
            ref: 'bid'
        }
    ]

})

const Tender = mongoose.model('tender', tenderSchema);
module.exports = Tender;