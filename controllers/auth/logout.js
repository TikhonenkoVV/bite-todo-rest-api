const Token = require("../../models/token");
const { User } = require("../../models/user");

const logout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: "" });
    await Token.findOneAndDelete(req.user.id);

    res.status(204).json({
        message: "Logout",
    });
};

module.exports = logout;
