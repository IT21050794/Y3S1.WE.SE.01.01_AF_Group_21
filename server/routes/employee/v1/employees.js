const { Router } = require('express');
const auth = require('../../../middlewares/authMiddelware');
const employee = require('../../../controllers/employee/v1/employee');

const router = Router();

router.put('/v1/:id',auth.requireAuth, auth.checkUser, employee.updateEmployee);
router.get('/v1/:id',auth.requireAuth, auth.checkUser, employee.getEmployee);
router.delete('/v1/:id',auth.requireAuth, auth.checkUser, employee.deleteEmployee);
router.get('/v1',auth.requireAuth, auth.checkUser, employee.getAllEmployees);

module.exports = router;