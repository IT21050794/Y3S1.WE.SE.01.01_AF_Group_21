const { Router } = require('express');
const citizenController = require('../../../controllers/citizen/v1/citizenController');
const auth = require('../../../middlewares/authMiddelware');

const router = Router();

router.put('/v1/citizens',auth.requireAuth, auth.checkUser, citizenController.updateCitizen);
router.get('/v1/citizens',auth.requireAuth, auth.checkUser, citizenController.getCitizen);
router.delete('/v1/citizens',auth.requireAuth, auth.checkUser, citizenController.deleteCitizen);
router.get('/v1/citizens/admin', citizenController.getAllCitizens);

module.exports = router;