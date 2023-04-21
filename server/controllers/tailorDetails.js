import * as dotenv from "dotenv";
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

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

export default router;
