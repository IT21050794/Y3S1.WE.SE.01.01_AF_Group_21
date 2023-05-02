const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// PaymentMethod schema
const paymentMethodSchema = new mongoose.Schema({
    cardHoldersName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    citizen: {
        type: Schema.Types.ObjectId,
        ref: 'citizen'
    }
});

const PaymentMethod = mongoose.model('paymentmethod', paymentMethodSchema);
module.exports = PaymentMethod;