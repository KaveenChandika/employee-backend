const express = require("express");
const router = express.Router();

const controller = require("../controllers/employee");

router.get('/employee',controller.getEmployees);
router.get('/employee/:id',controller.getEmployeeById);
router.post('/employee', controller.addEmployees)
router.put('/employee/:empId', controller.updateEmployee)
router.delete('/employee/:empId',controller.deleteEmployee)

module.exports = router;