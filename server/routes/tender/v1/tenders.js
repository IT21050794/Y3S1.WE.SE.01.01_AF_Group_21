const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const tender = require('../../../controllers/tenders/v1/tender');
const upload = require('../../../middlewares/upload');

const router = Router();

router.post('/v1', auth.requireAuth, auth.checkUser, upload.single('pdf'), tender.createTender);
router.get('/v1', auth.requireAuth, auth.checkUser, tender.getAllTenders);
router.get('/v1/:id/download', auth.requireAuth, auth.checkUser, tender.downloadDocument);

module.exports = router;