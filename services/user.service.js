const UserModel = require('../models/user.models');

module.exports.createUser = async ({
    firstName,
    lastName,
    email,
    password,
}) => {
    if (!firstName  || !email || !password) {
        throw new Error('Missing required fields');
    }
    const user = userModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password
    })
    return user;
}