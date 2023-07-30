import express from "express";
import {getTest} from "../controllers/test.js"

import nodemailer from "nodemailer";
const router = express.Router();

const sendEmail = async (req,res) => {
     console.log(req.body);
    const { name,email,phoneno,message} = req.body;
  
    try {
      // Create a Nodemailer transporter using your Gmail account details
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
        },
      });
  
      // Configure the email options
      const mailOptions = {
        from: process.env.GMAIL_USER,
       to: process.env.GMAIL_RECEIVER,
        subject:"Contact Form Details",
       
        html: `  <div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f3f3f3; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border: 2px solid #ccc; border-radius: 10px;">
          <p style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #007bff;">Name:</p>
          <p style="font-family: Verdana, sans-serif; font-size: 16px; color: #ff5733;">${name}</p>
          <p style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #007bff;">Email:</p>
          <p style="font-family: Verdana, sans-serif; font-size: 16px; color: #ff5733;">${email}</p>
          <p style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #007bff;">Phone:</p>
          <p style="font-family: Verdana, sans-serif; font-size: 16px; color: #ff5733;">${phoneno}</p>
          <p style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #007bff;">Message:</p>
          <p style="font-family: Verdana, sans-serif; font-size: 16px; color: #ff5733;">${message}</p>
        </div>
      </div>`
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
  
router.get("/", getTest);
router.post("/send-email",sendEmail);

export default router;
