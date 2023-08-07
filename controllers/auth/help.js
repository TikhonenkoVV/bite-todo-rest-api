const { sendEmail } = require("../../helpers/");

const help = async (req, res) => {
  const { email, message = null } = req.body;

  const helpEmail = {
    email,
    message,
  };

  await sendEmail(helpEmail);

  res.status(201).json({
    email,
    message,
  });
};

module.exports = help;
