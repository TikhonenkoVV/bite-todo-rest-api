module.exports = {
    jwt: {
        tokens: {
            access: {
                type: "access",
                expiresIn: "1d",
            },
            refresh: {
                type: "refresh",
                expiresIn: "7d",
            },
        },
    },
};
