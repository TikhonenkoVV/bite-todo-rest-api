module.exports = {
    jwt: {
        tokens: {
            access: {
                type: "access",
                expiresIn: "3m",
            },
            refresh: {
                type: "refresh",
                expiresIn: "7d",
            },
        },
    },
};
