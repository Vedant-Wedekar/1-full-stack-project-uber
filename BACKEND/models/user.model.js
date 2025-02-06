const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the schema
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            // minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            // minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // minlength: [5, 'Email must be at least 5 characters long'],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
});

// Pre-save middleware for hashing passwords
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
// Instance method to compare passwords
// userSchema.methods.comparePassword = async function (inputPassword) {
//     return await bcrypt.compare(inputPassword, this.password);
// };
userSchema.methods.comparePassword = async function (inputPassword) {
    const result = await bcrypt.compare(inputPassword, this.password);
    console.log('Password Match:', result); // Debugging log
    return result;
};
// Instance method to generate auth tokens
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

// Export the model
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
