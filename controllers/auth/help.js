const { sendEmail } = require("../../helpers/");

const help = async (req, res) => {
    const { name, email, message = null } = req.body;

    const helpEmail = {
        name,
        email,
        message,
    };

    await sendEmail(helpEmail);

    res.status(201).json({
        name,
        email,
        message,
    });
};

module.exports = help;
