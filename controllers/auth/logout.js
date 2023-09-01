const { Token } = require("../../models");

const logout = async (req, res) => {
    const { _id } = req.user;

    await Token.findOneAndDelete(req.user.id);

    res.status(204).json({
        message: "Logout",
    });
};

module.exports = logout;
