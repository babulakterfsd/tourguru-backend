const { ObjectId } = require('mongodb');
const User = require('../models/User.model');

module.exports.getAllUserService = async (query) => {
    if (query.name) {
        const { name } = query;
        const filter = { displayName: { $regex: name, $options: 'i' } };
        const result = await User.find(filter).toArray();
        if (result.length === 0) {
            return [];
        }
        return result;
    }
    const result = await User.find({});
    return result;
};

module.exports.updateUserService = async (userData) => {
    const filter = { email: userData.email };
    const options = { upsert: true };
    const updatedUser = {
        $set: { ...userData },
    };
    const result = await User.updateOne(filter, updatedUser, options);
    return result;
};

module.exports.getSingleUserinfoService = async (req) => {
    const decodedEmail = req?.decoded?.userEmail;
    const { email } = req.params;
    if (decodedEmail === email) {
        const query = { email };
        const user = await User.findOne(query);
        return user;
    }
};

module.exports.checkAdminRoleService = async (req) => {
    const { email } = req.params;
    const query = { email };
    const user = await User.findOne(query);
    let isAdmin = false;
    if (user?.role === 'admin') {
        isAdmin = true;
    }
    return isAdmin;
};

module.exports.updateUserToAdminService = async (req) => {
    const { id } = req.params;
    const filter = { _id: ObjectId(id) };
    const options = { upsert: true };
    const roleUpdate = {
        $set: {
            role: 'admin',
        },
    };
    const result = await User.updateOne(filter, roleUpdate, options);
    return result;
};

module.exports.updateUserProfileService = async (req) => {
    const { email } = req.params;
    const query = { email };
    const user = await User.findOne(query);
    const options = { upsert: true };
    const infoUpdate = {
        $set: {
            ...req.body,
        },
    };
    const result = await User.updateOne(user, infoUpdate, options);
    return result;
};

module.exports.deleteUserService = async (req) => {
    const { email } = req.params;
    const query = { email };
    const result = await User.deleteOne(query);
    return result;
};
