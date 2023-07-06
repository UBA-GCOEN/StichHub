import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const SOURCE_EMAIL = process.env.SOURCE_EMAIL;
const SOURCE_PASSWORD = process.env.SOURCE_PASSWORD;

const Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: SOURCE_EMAIL, pass: SOURCE_PASSWORD },
});

const sendWelcomeMail = async (name, email) => {
  // console.log(name, email, SOURCE_EMAIL);
  let info = await Transporter.sendMail({
    from: SOURCE_EMAIL,
    to: email,
    subject: `Welcome to StichHub!!`,

    html: `<b>Hi ${name}</b>,<br/><br/>
      Thank you for registering at StichHub!<br />
      We're excited to have you on board. Check out the website and its amazing 3D & AR Feature: <br/>
      <b>https://stichhub.vercel.app</b><br/><br/>

      If you did not register for an account on StichHub, please disregard this email. It's possible that another person with a similar email address accidentally used it during registration.<br/><br/>

      If you encounter any issues or have any questions, please don't hesitate to reach out to our support team at <b>stichhub.office@gmail.com</b> . We're here to help!<br/><br/>

      We're thrilled to have you on board.<br/>
      Thank you for choosing StichHub!<br/><br/>
      
      Best regards,<br/>
      The StichHub Team<br/>`,
  });
  // console.log(info);
};

export default sendWelcomeMail;
