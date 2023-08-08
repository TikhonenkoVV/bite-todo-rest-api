const getCurrent = async (req, res) => {
    const { email, name, theme, avatarURL } = req.user;
    console.log("email", email);
    console.log("name", name);

    res.json({
        email,
        name,
        theme,
        avatarURL,
    });
};

module.exports = getCurrent;
