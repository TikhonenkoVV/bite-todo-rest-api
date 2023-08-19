const jwt = require("jsonwebtoken");
const { authHelper } = require("../../helpers");
const Token = require("../../models/token");

const { JWT_SECRET } = process.env;

const refreshTokens = async (req, res) => {
    const { refreshToken } = req.body;
    let payload;
    try {
        payload = jwt.verify(refreshToken, JWT_SECRET);
        if (payload.type !== "refresh") {
            return res.status(400).json({ message: "Invalid token" });
        }
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(403).json({ message: "Token expired" });
        }
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(400).json({ message: "Invalid token" });
        }
    }

    const session = jwt.decode(refreshToken);
    console.log("prevses", session.sessionId);
    const token = await Token.findOne({ sessionId: session.sessionId });

    if (token === null) {
        return res.status(400).json({ message: "Invalid token" });
    }

    const newTokens = await authHelper.updateTokens(
        token.userId,
        session.sessionId
    );
    return res.json(newTokens);
};

module.exports = refreshTokens;
