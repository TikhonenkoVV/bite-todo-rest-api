const { ctrlerWrapper } = require("../../helpers");
const refreshToken = require("./refreshToken");
const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateUser = require("./updateUser");
const uploadAvatar = require("./uploadAvatar");
const help = require("./help");
const googleAuuth = require("./googleAuuth");

module.exports = {
    refreshToken: ctrlerWrapper(refreshToken),
    register: ctrlerWrapper(register),
    login: ctrlerWrapper(login),
    getCurrent: ctrlerWrapper(getCurrent),
    logout: ctrlerWrapper(logout),
    updateUser: ctrlerWrapper(updateUser),
    uploadAvatar: ctrlerWrapper(uploadAvatar),
    help: ctrlerWrapper(help),
    googleAuuth: ctrlerWrapper(googleAuuth),
};
