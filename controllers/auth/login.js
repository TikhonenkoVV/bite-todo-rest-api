const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

const { User } = require("../../models/user");

const { HttpError, authHelper } = require("../../helpers");

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(400, "Email or password invalid");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw HttpError(400, "Email or password invalid");
    }

    const tokens = await authHelper.updateTokens(user.id);

    // await User.findByIdAndUpdate(user._id, { token: tokens.accessToken });

    res.status(201).json({
        tokens,
        user: {
            email: user.email,
            name: user.name,
            theme: user.theme,
            avatarURL: user.avatarURL,
        },
    });
};

module.exports = login;
