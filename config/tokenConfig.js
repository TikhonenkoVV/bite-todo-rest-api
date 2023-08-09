module.exports = {
    jwt: {
        tokens: {
            access: {
                type: "access",
                expiresIn: "30d",
            },
            refresh: {
                type: "refresh",
                expiresIn: "30d",
            },
        },
    },
};
