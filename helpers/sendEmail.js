require("dotenv").config();
const { nanoid } = require("nanoid");
const nodemailer = require("nodemailer");

const { META_PASSWORD, EMAIL } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "taskpro2023@meta.ua",
    pass: META_PASSWORD,
  },
});

const sendEmail = async (data) => {
  const { email, message } = data;
  const toEmail = "taskpro.project@gmail.com";

  const emailBody = {
    from: EMAIL,
    to: toEmail,
    subject: `ask #${nanoid()}: ${message}`,
    html: `<p><b>order #${nanoid()}: ${message} from user: ${email}</b></p>`,
  };

  await transporter.sendMail(emailBody);
  return true;
};

module.exports = { sendEmail };
