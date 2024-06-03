const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');


router.route('/')
    .get(employeeController.getEmployees)

module.exports = router;