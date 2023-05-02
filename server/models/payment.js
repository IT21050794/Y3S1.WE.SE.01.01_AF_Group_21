const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const payReasons = ['taxes', 'licenses', 'premits'];
const payStatus = ['pending', 'approved', 'rejected'];

// Payment schema
const paymentSchema = new mongoose.Schema({
    paymentReason: {
        type: String,
        required: true,
        enum: payReasons
    },
    paymentDetailsId: {
        type: Schema.Types.ObjectId,
        required: true,
        res: 'paymentmethod'
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    pdf: {
        type: String
    },
    citizen: {
        type: Schema.Types.ObjectId,
        ref: 'citizen'
    },
    status: {
        type: String,
        required: true,
        enum: payStatus,
        default: 'pending'
    }
});

const Payment = mongoose.model('payment', paymentSchema);
module.exports = Payment;