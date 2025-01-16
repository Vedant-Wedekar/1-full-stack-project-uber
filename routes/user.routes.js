const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('fullname.firstName').isLength({ min: 2 }).withMessage('First name must be at least 2 characters long'),
] , userController.registerUser);  // Validate the input data





module.exports = router;