import nodemailer from "nodemailer";

const SOURCE_EMAIL = process.env.SOURCE_EMAIL;
const SOURCE_PASSWORD = process.env.SOURCE_EMAIL_PASSWORD;

const Transporter = nodemailer.createTransport({service:"gmail", auth:{user:SOURCE_EMAIL, pass:SOURCE_PASSWORD}})

const sendWelcomeMail = async (name, email) => {
    console.log(name, email, SOURCE_EMAIL);
    let info = await Transporter.sendMail({
      from: SOURCE_EMAIL,
      to: email,
      subject: `Welcome to StichHub!!`,
  
      html: `<b>Hi ${name}</b>,<br/><br/>
      Congratulations! Your registration for <b>StichHub</b> is successful.<br/><br/>
      Regards<br/>
      StichHub<br/>`
    });
    console.log(info);
}

export default sendWelcomeMail;