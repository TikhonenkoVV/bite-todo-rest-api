module.exports = {
    jwt: {
        tokens: {
            access: {
                type: "access",
                expiresIn: "15m",
            },
            refresh: {
                type: "refresh",
                expiresIn: "1d",
            },
        },
    },
};
