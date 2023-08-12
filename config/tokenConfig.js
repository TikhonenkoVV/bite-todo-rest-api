module.exports = {
    jwt: {
        tokens: {
            access: {
                type: "access",
                expiresIn: "20s",
            },
            refresh: {
                type: "refresh",
                expiresIn: "40s",
            },
        },
    },
};
