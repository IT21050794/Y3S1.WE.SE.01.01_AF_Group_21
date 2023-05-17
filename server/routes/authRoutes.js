const { Router } = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddelware');

const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.get('/getUser', authMiddleware.requireAuth, authMiddleware.checkUser, authController.getUser); //for dev purposes(remove after devolpment)
router.delete('/deleteAll', authController.deleteAll); //for dev purposes(remove after devolpment)
router.get('/logout', authController.logout_get);

module.exports = router;