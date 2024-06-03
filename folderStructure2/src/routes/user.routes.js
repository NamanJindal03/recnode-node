const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.route('/')
    .post(userController.createUser)
    .get(userController.getAllUsers)

router.route('/:userId')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

router.route('/best-result/:name')
    .get(userController.getUserByName)


//Experimental 
router.route('/test/user2model')
    .post(userController.checkPastPass)

router.route('/')

module.exports = router;