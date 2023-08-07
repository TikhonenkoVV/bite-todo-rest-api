const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

const { JWT_SECRET } = process.env;

const { HttpError } = require("../helpers");

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    console.log("token", token);

    if (bearer !== "Bearer") {
        next(HttpError(401));
    }

    if (!token) {
        next(HttpError(401, "No token"));
    }

    try {
        const { userId } = jwt.verify(token, JWT_SECRET);
        console.log("userId", userId);
        const user = await User.findById(userId);
        if (!user || !user.token || user.token !== token) {
            next(HttpError(401));
        }
        req.user = user;
        next();
    } catch (error) {
        next(HttpError(401));
    }
};

module.exports = authenticate;
