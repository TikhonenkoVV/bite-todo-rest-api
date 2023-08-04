const refreshToken = require("./refreshToken");
const login = require("./login");
const register = require("./register");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateUser = require("./updateUser");

module.exports = { 
    refreshToken,
    login,
    register,
    getCurrent,
    logout,
    updateUser,
};
