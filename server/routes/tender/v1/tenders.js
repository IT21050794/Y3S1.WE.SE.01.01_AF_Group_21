const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const tender = require('../../../controllers/tenders/v1/tender');

const router = Router();

router.post('/v1', auth.requireAuth, auth.checkUser, tender.createTender);
router.get('/v1', auth.requireAuth, auth.checkUser, tender.getAllTenders);

module.exports = router;