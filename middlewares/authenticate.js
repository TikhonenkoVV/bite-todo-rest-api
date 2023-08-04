const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

const { JWT_SECRET } = process.env;

const {HttpError} = require("../helpers");

const authenticate = async (req, res, next) => {
    const {authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(" ");
    
    if (bearer !== "Bearer") {
        next(HttpError(401))
    }
    try {
        const {id} = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(id);
        if(!user|| !user.token || user.token !== token) {
            next(HttpError(401));
        }
        req.user = user;
        next();
        
    } 
    catch (error) {
        next(HttpError(401));
    }
}

module.exports = authenticate;