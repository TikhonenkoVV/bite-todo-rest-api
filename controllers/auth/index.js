const refreshToken = require("./refreshToken");
const login = require("./login");
const register = require("./register");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateUser = require("./updateUser");
const uploadAvatar = require("./uploadAvatar");
const help = require("./help");
const googleAuuth = require("./googleAuuth");

module.exports = {
    refreshToken,
    login,
    register,
    getCurrent,
    logout,
    updateUser,
    uploadAvatar,
    help,
    googleAuuth,
};
