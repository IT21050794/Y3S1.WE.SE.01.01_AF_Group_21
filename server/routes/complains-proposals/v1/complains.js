const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const complain = require('../../../controllers/complains-proposals/v1/complain');

const router = Router();

router.post('/v1', auth.requireAuth, auth.checkUser, complain.createComplain);
router.get('/v1', auth.requireAuth, auth.checkUser, complain.getComplainsByUser);
router.get('/v1/admin', auth.requireAuth, auth.checkUser, complain.getAllComplains);
router.get('/v1/emp/pending', auth.requireAuth, auth.checkUser, complain.getPendingComplains);
router.get('/v1/emp/reviewing', auth.requireAuth, auth.checkUser, complain.getReviewingComplains);
router.put('/v1/emp/:id', auth.requireAuth, auth.checkUser, complain.updateComplainStatus);
router.put('/v1/emp/resolve/:id', auth.requireAuth, auth.checkUser, complain.resolveComplain);
router.delete('/v1/:id', auth.requireAuth, auth.checkUser, complain.deleteComplain);

module.exports = router;