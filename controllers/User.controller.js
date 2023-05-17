const {
    updateUserService,
    getAllUserService,
    getSingleUserinfoService,
    checkAdminRoleService,
    updateUserToAdminService,
    updateUserProfileService,
    deleteUserService,
} = require('../services/User.services');

module.exports.getAllUser = async (req, res) => {
    const result = await getAllUserService(req.query);
    res.json(result);
};

module.exports.updateUser = async (req, res) => {
    const result = await updateUserService(req.body);
    res.json(result);
};

module.exports.getSingleUserinfo = async (req, res) => {
    const user = await getSingleUserinfoService(req);
    res.json(user);
};

module.exports.checkAdminRole = async (req, res) => {
    const isAdmin = await checkAdminRoleService(req);
    res.json({ admin: isAdmin });
};

module.exports.updateUserToAdmin = async (req, res) => {
    const result = await updateUserToAdminService(req);
    res.json(result);
};

module.exports.updateUserProfile = async (req, res) => {
    const result = await updateUserProfileService(req);
    res.json(result);
};

module.exports.deleteUser = async (req, res) => {
    const result = await deleteUserService(req);
    res.json(result);
};
