const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const payMethods = require('../../../controllers/payments/v1/paymentMethod');

const router = Router();

router.post('/v1', auth.requireAuth, auth.checkUser, payMethods.createPaymentMethod);
router.delete('/v1/:id', auth.requireAuth, auth.checkUser, payMethods.deletePaymentMethod);
router.get('/v1', auth.requireAuth, auth.checkUser, payMethods.getPayMethodsByUser);

module.exports = router;