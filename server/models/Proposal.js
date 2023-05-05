const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const suggestionStatus = ['reviewing', 'pending', 'accepted', 'rejected'];

const newSuggestionSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    goal: {
        type: String,
        required: true,
    },
    scope: {
        type: String,
        required: true,
    },
    advantages: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    pdf: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'please enter a valid email']
    },
    status: {
        type: String,
        enum: suggestionStatus,
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

const Proposal = mongoose.model('suggestion', newSuggestionSchema);
module.exports = Proposal;