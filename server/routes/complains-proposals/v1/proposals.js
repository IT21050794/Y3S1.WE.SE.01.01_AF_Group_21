const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const proposal = require('../../../controllers/complains-proposals/v1/proposal');

const router = Router();

router.post('/v1', auth.requireAuth, auth.checkUser, proposal.createSuggestion);
router.get('/v1', auth.requireAuth, auth.checkUser, proposal.getSuggestionsByUser);
router.get('/v1/admin', auth.requireAuth, auth.checkUser, proposal.getAllSuggestions);
router.get('/v1/emp/pending', auth.requireAuth, auth.checkUser, proposal.getPendingSuggestion);
router.get('/v1/emp/reviewing', auth.requireAuth, auth.checkUser, proposal.getReviewingSuggestions);
router.get('/v1/emp/accepted', auth.requireAuth, auth.checkUser, proposal.getAcceptedSuggestions);
router.get('/v1/emp/rejected', auth.requireAuth, auth.checkUser, proposal.getRejectedSuggestions);
router.put('/v1/emp/:id', auth.requireAuth, auth.checkUser, proposal.updateSuggestionStatus);
router.put('/v1/emp/accept/:id', auth.requireAuth, auth.checkUser, proposal.acceptSuggestion);
router.put('/v1/emp/reject/:id', auth.requireAuth, auth.checkUser, proposal.rejectSuggestion);
router.delete('/v1/:id', auth.requireAuth, auth.checkUser, proposal.deleteSuggestion);

module.exports = router;