const { User } = require("../../models");

const uploadAvatar = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "File is required" });
        }

        const { _id } = req.user;
        const avatarURL = req.file.path;

        const user = await User.findByIdAndUpdate(
            _id,
            {
                avatarURL,
            },
            { new: true }
        );

        return res.json({
            avatarURL: user.avatarURL,
        });
    } catch (error) {
        console.log(error);
        return next(error);
    }
};

module.exports = uploadAvatar;
