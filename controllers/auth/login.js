const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config()

const {User} = require("../../schemas/users");

const { JWT_SECRET } = process.env;

const {HttpError, ctrlerWrapper} = require("../../helpers");

const login = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
        throw HttpError (401, "Email or password invalid");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) {
        throw HttpError (401, "Email or password invalid");
    }

    const payload = {
        id: user._id,
    }
    console.log(payload);

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
    await User.findByIdAndUpdate(user._id, {token});

    res.status(201).json({
      token,
      user: { email: user.email, name: user.name },
    });
}

module.exports = ctrlerWrapper(login);