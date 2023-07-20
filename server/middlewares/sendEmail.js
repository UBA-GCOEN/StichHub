import nodemailer from "nodemailer";

// const SMPT_HOST = process.env.SMPT_HOST;
// const SMPT_PORT = process.env.SMPT_PORT;
// const SMPT_SERVICES = process.env.SMPT_SERVICES;
// const SMPT_MAIL = process.env.SMPT_MAIL;
// const SMPT_PASSWORD = process.env.SMPT_PASSWORD;

const sendEmail = async (options) => {
  const { to, subject ,message} = req.body;

  try {
    // Create a Nodemailer transporter using your Gmail account details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jayesheditz@gmail.com',
        pass: 'vjakpdivktdecmfx',
      },
    });

    // Configure the email options
    const mailOptions = {
      from: 'jayesheditz@gmail.com',
      to,
      subject,
      text: message,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}


export default sendEmail;
