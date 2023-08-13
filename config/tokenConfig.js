module.exports = {
    jwt: {
        tokens: {
            access: {
                type: "access",
                expiresIn: "7d",
            },
            refresh: {
                type: "refresh",
                expiresIn: "90d",
            },
        },
    },
};
