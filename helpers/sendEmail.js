require("dotenv").config();
const { nanoid } = require("nanoid");
const nodemailer = require("nodemailer");

const { META_PASSWORD, EMAIL } = process.env;

const transporter = nodemailer.createTransport({
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL,
        pass: META_PASSWORD,
    },
});

const sendEmail = async (data) => {
    const { email, name, message } = data;

    const emailBody = {
        from: EMAIL,
        to: EMAIL,
        subject: `Task Pro. Order: #${nanoid()}`,
        html: `
        <h2>BITE Task Pro</h2>
        <p><b>Message:</b></p>
        <p>${message}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Feedback email:</b> ${email}</p>
        `,
    };

    await transporter.sendMail(emailBody);
    return true;
};

module.exports = { sendEmail };
