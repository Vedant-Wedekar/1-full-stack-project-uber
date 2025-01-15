const usermodels = require('../models/user.models');
const userSevice = require('../models/user.service');
const { validationResult } = require('express-validator');


module.exports.registerUser = async (req, res , next ) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;
    const hashedpassword = await userSevice.hashpassword(password);
    const user = await userSevice.createUser({ 
        firstName,
         lastName,
          email, 
          password: hashedpassword  
         });
const token = await user.generateAuthToken();



    res.status(201).json(token,user);



}

