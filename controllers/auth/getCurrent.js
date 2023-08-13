const getCurrent = async (req, res) => {
    const { email, name, theme, avatarURL } = req.user;

    res.json({
        email,
        name,
        theme,
        avatarURL,
    });
};

module.exports = getCurrent;
