const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





// Connect to MongoDB
const userscheme = new mongoose.Schema({    
    fullname:{
        firstName:{
            required: true,
            type: String,
            minlenght: 3,
            maxlenght: 50
        },
        lastName:{
            required: true,
            type: String,
            minlenght: 10,            
            maxlenght: 50
        }  
     },
    email: {
        
        required: true,
        type: String,
        unique: true,
        minlenght: 10,
        maxlenght: 50
    },
    password: {
        required: true,
        type: String,
        select: false,
    },
    socketID: {
        type: String
    }
})

userscheme.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: user.this._id }, process.env.JWT_SECRET , {expiresIn: '24h'} );
    return token;
}

userscheme.methods.comparepassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
}

userscheme.methods.hashpassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    return hashedpassword;
}
const userModels = mongoose.model('user', userscheme);
module.exports = userModels