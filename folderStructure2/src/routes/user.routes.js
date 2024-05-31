const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.route('/')
    .post(userController.createUser)
    .get(userController.getAllUsers)

router.route('/:userId')
    .get(userController.getUserById)

module.exports = router;