const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const { email, message } = data;
  const toEmail = "taskpro.project@gmail.com";

  const emailBody = {
    from: email,
    to: toEmail,
    subject: message,
    html: `<p>${message}</p>`,
  };

  await sgMail.send(emailBody);
  return true;
};

module.exports = { sendEmail };
