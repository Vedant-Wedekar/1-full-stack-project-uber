const userModel = require('../BACKEND/models/user.model');

module.exports.createUser = async ({ fullname, email, password }) => {
    if (!fullname?.firstname || !fullname?.lastname || !email || !password) {
        throw new Error('Missing required fields');
    }
    // Directly create the user; the password will be hashed by the pre-save hook
    const user = await userModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password // Pass the raw password; it will be hashed automatically
    });
    return user;
};
