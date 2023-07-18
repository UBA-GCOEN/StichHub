import * as dotenv from "dotenv";
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import twilio from "twilio";


const router = express.Router();

import TailorList from "../models/tailorDetails.js";
import userTailorModel from "../models/userTailor.js";

/**
 *  Method : POST
 *  Route  : tailors/list/
 *  Description : to complete the details of the tailor user
 */

export const addTailor = async (req, res) => {
  const tailorDetails = req.body;
  const user = await userTailorModel.findById(req.userId);
  const newTailor = new TailorList({
    ...tailorDetails,
    creator: req.userId,
    name: user.name,
    rating: "4.0",
    avaliable: true,
  });

  try {
    await newTailor.save();
    res.status(201).json({
      success: true,
      message: "Success!! Tailor Added to List",
      newTailor,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 *  Method  : GET
 *  Route   :   tailors/list
 * DEscription  :   getting all the list of the tailor user
 *
 */
export const getTailorList = async (req, res) => {
  try {
    const alltailors = await TailorList.find();
    res.status(200).json(alltailors);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * MEthod : PUT
 * Route : tailors/update/profile
 * Description : only city , state , pincode , bio and Address can change
 */
export const updateTailorProfile = async (req, res) => {
  try {
    const newDetails = req.body;
    // console.log(newDetails);
    const previousDetails = await TailorList.findOne({ creator: req.userId });
    // console.log(previousDetails);
    const updatedData = await TailorList.findByIdAndUpdate(
      previousDetails._id,
      newDetails,
      { new: true }
    );

    // console.log(updatedData);

    res.status(200).json({
      success: true,
      message: "profile Details updated Successfully.",
      updatedData,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};


export const getSpecificTailor = async(req, res) => {
    const userId = req.userId;
    try {
        const tailor = await TailorList.findOne({creator: userId});
        res.status(200).json(tailor);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
};
    
export const verifyTailorDetails = async (req, res) => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    const accountSid = process.env.TWILIOSID;
    const authToken = process.env.TWILIOAUTH;
    const client = twilio(accountSid, authToken);
  try {
    client.messages
      .create({
        from: process.env.TWILIOPHONE,
        to: `+91${req.body.detail}`,
        body: `Your OTP verification code for StichHub is ${otp}`
      })
      .then(() => res.status(200).json({userotp: otp}))
  } catch (error) {
    res.status(400).json({ error: error });

  }
};

export default router;
