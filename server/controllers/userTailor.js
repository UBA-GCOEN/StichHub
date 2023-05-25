import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

import userTailorModel from "../models/userTailor.js";
import generateToken from "../middlewares/generateToken.js";
import sendEmail from "../middlewares/sendEmail.js";

const SECRET = process.env.TAILOR_USER;

/**
 * Route : /userTailor/signin
 * Description : Tailor Login
 */
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await userTailorModel.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid Credentials" });

    if (!oldUser.isVerified) {
      const token = generateToken(oldUser, SECRET, "300s");
      const url = `http://localhost:5173/verify-email/${token}`;

      const options = {
        name: result.name,
        email: result.email,
        subject: "Verify Email",
        message_Content:
          "<p> Hi " +
          result.name +
          ",<br /> Please verify your Tailor StichHub Account by clicking on the verification link. This Verification link is valid for 5:00 minutes <br /> <a href =" +
          url +
          " >Verify</a></p> ",
      };
      await sendEmail(options);
    }
    const token = generateToken(oldUser, SECRET);

    res.status(200).json({
      success: true,
      result: oldUser,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

/**
 * Route : /userTailor/register
 * Description : Tailor Registration
 */
export const register = async (req, res) => {
  const { name, email, password, confirmPassword, mobile } = req.body;

  try {
    if (!name || !email || !mobile || !password || !confirmPassword) {
      return res.status(500).json({
        success: false,
        message: "Please Fill all the Details.",
      });
    }
    const oldUser = await userTailorModel.findOne({ email });

    if (oldUser)
      return res.status(404).json({
        success: false,
        message: "User already exist",
      });

    if (password !== confirmPassword)
      return res.status(404).json({
        success: false,
        message: "Password doesn't Match",
      });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userTailorModel.create({
      name,
      email,
      password: hashedPassword,
      mobile,
    });

    // sending verification email after user creation
    if (result) {
      const token = generateToken(result, SECRET, "300s");
      const url = `http://localhost:5173/verify-email/${token}`;

      const options = {
        name: result.name,
        email: result.email,
        subject: "Verify Email",
        message_Content:
          "<p> Hi " +
          result.name +
          ",<br /> Please verify your Tailor StichHub Account by clicking on the verification link. This Verification link is valid for 5:00 minutes <br /> <a href =" +
          url +
          " >Verify</a></p> ",
      };
      await sendEmail(options);
    }
    const token = generateToken(result, SECRET);

    res.status(201).json({
      success: true,
      message: "Tailor User Registered Successfully.Please Verify your Email.",
      result,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
    console.log(error);
  }
};

/**
 * Route : /userTailor/verify
 * Description : Verify email using token sent to mail
 */
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.body;

    // verify and decodes the token
    const decodedUser = await jwt.verify(token, SECRET);

    // getting user using decoded data
    const tailorUser = await userTailorModel.findOne({ _id: decodedUser.id });
    // console.log(tailorUser);
    const data = {
      isVerified: true,
    };

    // set the status of user verified
    const verifiedTailorUser = await userTailorModel.findByIdAndUpdate(
      tailorUser._id,
      data,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Email Verified Successfully",
      verifiedTailorUser,
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "Invalid Verification Link",
    });
  }
};

/**
 *  Route :  /userTailor/resend/verificationlink
 *  Description : Resend Verification Link
 */
export const resendVerificationLink = async (req, res) => {
  try {
    const { email } = req.body;

    // finding tailor user
    const tailorUser = await userTailorModel.findOne({ email });

    if (!tailorUser) {
      return res.status(404).json({
        success: false,
        message: "Email Id not Registered with us",
      });
    }

    const token = generateToken(tailorUser, SECRET, "300s");
    const url = `http://localhost:5173/verify-email/${token}`;

    const options = {
      name: tailorUser.name,
      email: tailorUser.email,
      subject: "Verify Email",
      message_Content:
        "<p> Hi " +
        tailorUser.name +
        ",<br /> Please verify your Tailor StichHub Account by clicking on the verification link. This Verification link is valid for 5:00 minutes <br /> <a href =" +
        url +
        " >Verify</a></p> ",
    };
    await sendEmail(options);

    res.status(201).json({
      success: true,
      message: `An Email is sent to your Email ${tailorUser.email}. Please Verify your Email.`,
      verification_link: url,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

/***
 * Route : /userTailor/getmyself
 * Description : Get my self details
 */
export const getMySelf = async (req, res) => {
  try {
    const tailorUser = req.user;
    return res.status(200).json({
      success: true,
      tailorUser,
      message: "Tailor User Details Fetched",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
