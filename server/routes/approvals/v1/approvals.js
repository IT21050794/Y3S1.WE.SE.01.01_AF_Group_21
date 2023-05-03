const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const approval = require('../../../controllers/approvals/v1/approval');

const router = Router();

router.post('/v1', auth.requireAuth, auth.checkUser, approval.createApproval);
router.get('/v1', auth.requireAuth, auth.checkUser, approval.getApprovalsByUser);
router.get('/v1/emp', auth.requireAuth, auth.checkUser, approval.getPendingApprovals);
router.put('/v1/emp/:id', auth.requireAuth, auth.checkUser, approval.updateApprovalsStatus);
router.delete('/v1/:id', auth.requireAuth, auth.checkUser, approval.deleteApproval);

module.exports = router;