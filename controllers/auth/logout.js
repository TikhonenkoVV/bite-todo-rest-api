const { ctrlerWrapper } = require("../../helpers");
const {User} = require("../../schemas/users");

const logout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate( _id, { token: "" });

    res.status(204).json({
        message: "Logout"
    })
};

module.exports = ctrlerWrapper(logout);