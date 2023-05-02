const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const payment = require('../../../controllers/payments/v1/payment');

const router = Router();

router.post('/v1', auth.requireAuth, auth.checkUser, payment.createPayment);
router.get('/v1', auth.requireAuth, auth.checkUser, payment.getPaymentsByUser);
router.get('/v1/emp', auth.requireAuth, auth.checkUser, payment.getAllPayments);
router.put('/v1/emp/:id', auth.requireAuth, auth.checkUser, payment.updatePaymentStatus);

module.exports = router;