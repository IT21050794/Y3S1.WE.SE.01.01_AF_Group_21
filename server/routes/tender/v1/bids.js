const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const bids = require('../../../controllers/tenders/v1/bid');
const upload = require('../../../middlewares/upload');

const router = Router();

router.post('/v1', auth.requireAuth, auth.checkUser, upload.single('pdf'), bids.createBid);
router.get('/v1', auth.requireAuth, auth.checkUser, bids.getAllBidByUser);
router.get('/v1/:id/download', auth.requireAuth, auth.checkUser, bids.downloadDocument);
router.get('/v1/emp/:id', auth.requireAuth, auth.checkUser, bids.getBidsByTender);
router.delete('/v1/:id', auth.requireAuth, auth.checkUser, bids.deleteBid);
router.put('/v1/emp/:id', auth.requireAuth, auth.checkUser, bids.updateBidStatus);

module.exports = router;