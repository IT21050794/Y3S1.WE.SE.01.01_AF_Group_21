const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const approval = require('../../../controllers/approvals/v1/approval');
const upload = require('../../../middlewares/upload');

const router = Router();

router.post('/v1', auth.requireAuth, auth.checkUser, upload.single('pdf'), approval.createApproval);
router.get('/v1', auth.requireAuth, auth.checkUser, approval.getApprovalsByUser);
// download the pdf uploaded by the citizen when the initial form is submitted
router.get('/v1/:id/download', auth.requireAuth, auth.checkUser, approval.downloadCitizenDocument);
router.get('/v1/approval/:id/download', auth.requireAuth, auth.checkUser, approval.downloadGovDocument);
router.get('/v1/emp', auth.requireAuth, auth.checkUser, approval.getPendingApprovals);
router.put('/v1/emp/approve/:id', auth.requireAuth, auth.checkUser, upload.single('approvalPdf'), approval.approveApproval);
router.put('/v1/emp/reject/:id', auth.requireAuth, auth.checkUser, approval.rejectApproval);
router.delete('/v1/:id', auth.requireAuth, auth.checkUser, approval.deleteApproval);

module.exports = router;