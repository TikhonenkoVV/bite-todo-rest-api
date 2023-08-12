const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

const { JWT_SECRET } = process.env;

const { HttpError } = require("../helpers");

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
        next(HttpError(400, "Unsupported token"));
    }
    try {
        const { userId } = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(userId);
        console.log("user", user);
        if (!user) {
            next(HttpError(400));
        }
        req.user = user;
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: "Token expired" });
        }
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(400).json({ message: "Invalid token" });
        }
    }
};

module.exports = authenticate;
