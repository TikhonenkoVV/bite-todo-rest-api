module.exports = {
    jwt: {
        tokens: {
            access: {
                type: "access",
                expiresIn: "30s",
            },
            refresh: {
                type: "refresh",
                expiresIn: "30d",
            },
        },
    },
};
