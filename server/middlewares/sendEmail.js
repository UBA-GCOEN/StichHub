import nodemailer from "nodemailer";

const SMPT_HOST = process.env.SMPT_HOST;
const SMPT_PORT = process.env.SMPT_PORT;
const SMPT_SERVICES = process.env.SMPT_SERVICES;
const SMPT_MAIL = process.env.SMPT_MAIL;
const SMPT_PASSWORD = process.env.SMPT_PASSWORD;

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: SMPT_HOST,
    port: SMPT_PORT,
    services: SMPT_SERVICES,
    auth: {
      user: SMPT_MAIL,
      pass: SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    html: options.message_Content,
  };

  const mailInfo = await transporter.sendMail(mailOptions);

  // console.log(mailInfo);
};

export default sendEmail;
