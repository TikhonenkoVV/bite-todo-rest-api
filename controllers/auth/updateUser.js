const bcrypt = require("bcrypt");
const { User } = require("../../models");

const updateUser = async (req, res) => {
    const { _id } = req.user;
    const updateFields = {};

    if (req.body.name) updateFields.name = req.body.name;
    if (req.body.email) updateFields.email = req.body.email;
    if (req.body.theme) updateFields.theme = req.body.theme;

    if (req.body.password) {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        updateFields.password = hashPassword;
    }

    const result = await User.findByIdAndUpdate(
        _id,
        { $set: updateFields },
        { new: true }
    );

    res.json(result);
};

module.exports = updateUser;
