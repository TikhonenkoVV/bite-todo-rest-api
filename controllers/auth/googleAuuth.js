const { User } = require("../../models/user");
const { authHelper } = require("../../helpers");
const { FRONTEND_URL } = process.env;

const googleAuuth = async (req, res) => {
    const { _id: id } = req.user;
    console.log(req.user);
    const tokens = await authHelper.updateTokens(id);
    await User.findByIdAndUpdate(id, { token: tokens.accessToken });

    res.redirect(
        `${FRONTEND_URL}?accessToken=${tokens.accessToken}&refreshToken=${tokens.refreshToken}`
    );
};

module.exports = googleAuuth;
