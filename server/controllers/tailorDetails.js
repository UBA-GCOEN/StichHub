import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

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
    console.log(newDetails);
    const previousDetails = await TailorList.findOne({ creator: req.userId });
    console.log(previousDetails);
    const updatedData = await TailorList.findByIdAndUpdate(
      previousDetails._id,
      newDetails,
      { new: true }
    );

    console.log(updatedData);

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
export default router;
