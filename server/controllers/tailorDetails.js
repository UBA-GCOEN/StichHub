import * as dotenv from "dotenv";
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import twilio from "twilio";

const router = express.Router();

import TailorList from "../models/tailorDetails.js";
import userTailorModel from "../models/userTailor.js";

export const addTailor = async (req, res) => {
    const tailorDetails = req.body;

    const user = await userTailorModel.findById(req.userId);
    
    const newTailor = new TailorList({...tailorDetails, creator: req.userId, name: user.name,rating: '4.0',avaliable: true });

    try {
        await newTailor.save(); 
        res.status(201).json({message: 'Success!! Tailor Added to List'});

    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const getTailorList = async (req, res) => { 
    try {
        const alltailor = await TailorList.find();
        res.status(200).json(alltailor);
    } catch (error) {
        res.status(404).json({message: error.message});
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
        body: `Your phone verification otp for Stichhub is ${otp}`
      })
      .then(() => res.status(200).json({userotp: otp}))
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export default router;
