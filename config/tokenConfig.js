module.exports = {
    jwt: {
        tokens: {
            access: {
                type: "access",
                expiresIn: "90d",
            },
            refresh: {
                type: "refresh",
                expiresIn: "90d",
            },
        },
    },
};
