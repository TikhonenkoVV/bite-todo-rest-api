const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");
const Token = require("../models/token");
const { tokens } = require("../config/tokenConfig").jwt;

const { JWT_SECRET: secret } = process.env;
const sessionId = nanoid();

const generateAccessToken = (userId) => {
    const payload = {
        userId,
        type: tokens.access.type,
    };

    const options = {
        expiresIn: tokens.access.expiresIn,
    };

    return jwt.sign(payload, secret, options);
};

const generateRefreshToken = () => {
    const payload = {
        sessionId,
        id: nanoid(),
        type: tokens.refresh.type,
    };

    const options = {
        expiresIn: tokens.refresh.expiresIn,
    };

    return {
        id: payload.id,
        token: jwt.sign(payload, secret, options),
    };
};

const replaceDbRefreshToken = async (tokenId, userId, session) => {
    if (session) await Token.findOneAndDelete(session);

    const result = await Token.create({ tokenId, userId, sessionId });

    return result;
};

const updateTokens = async (userId, session) => {
    const accessToken = authHelper.generateAccessToken(userId);
    const refreshToken = authHelper.generateRefreshToken();

    await authHelper.replaceDbRefreshToken(refreshToken.id, userId, session);

    return { accessToken, refreshToken: refreshToken.token };
};

const authHelper = {
    generateAccessToken,
    generateRefreshToken,
    replaceDbRefreshToken,
    updateTokens,
};

module.exports = authHelper;
