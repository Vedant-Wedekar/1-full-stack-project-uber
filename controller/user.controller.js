const userModels = require('../models/user.model');
const bcrypt = require('bcrypt');

const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { fullname, email, password } = req.body; // Ensure this matches your input structure
        const user = await userService.createUser({ fullname, email, password });
        res.status(201).json({ message: 'User registered successfully', user });
 const token = user.generateAuthToken();
 res.status(201).json({ token, user });


    } catch (error) {
        console.error('Error in registerUser:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
 module.exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log('Login Attempt:', { email, password }); // Debugging log

        // Find user and include password for validation
        const user = await userModels.findOne({ email }).select('+password');
        if (!user) {
            console.log('User not found'); // Debugging log
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log('Stored Hashed Password:', user.password); // Debugging log

        // Check password match
        const isMatch = await user.comparePassword(password);
        console.log('Password Match:', isMatch); // Debugging log

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate token and send response
        const token = user.generateAuthToken();
        console.log('Generated Token:', token); // Debugging log

        return res.status(200).json({ token, user });

    } catch (error) {
        // Log and respond to unexpected errors
        console.error('Error in loginUser:', error);

        // Ensure this is the only response in case of an error
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
module.exports.getUserprofile = async (req, res) => {
    res.status(200).json({ user: req.user });
}

