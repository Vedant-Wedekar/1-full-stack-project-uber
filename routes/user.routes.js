const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register', [
    body('email')
        .isEmail()
        .withMessage('Email is invalid'),
    body('fullname.firstname')
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname')
        .isLength({ min: 3 })
        .withMessage('Last name must be at least 3 characters long'),
    body('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long'),
], userController.registerUser);

router.post('/login', [
    body('email')
        .isEmail()
        .withMessage('Email is invalid'),
    body('password')
        .isLength({ min: 3 })
        .withMessage('Password must be at least 3 characters long'),
], userController.loginUser);

router.get('/profile',authMiddleware.authuser,userController.getUserprofile);

module.exports = router;
