import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

import improveList from "../models/Improve.js";


const router = express.Router();

 export const improveOrder = async (req, res) => {
    const order = req.body;
    try {
      const isTailor = await improveList.find({ tailorId: order.tailorId });

      if (isTailor.length > 0) {
        await improveList.updateOne(
          { _id: isTailor[0]._id },
          {
            $push: {
              requests: {
                customerId: req.userId,
                orderData: order,
                status: "pending",
              },
            },
          }
        );
        res.status(201).json({ message: "Improvment request sent!!" });
      }
       else {
        const newOrder = new refineList({
          tailorId: order.tailorId,
          requests: {
            customerId: req.userId,
            orderData: order,
            status: "pending",
          },
          createdAt: new Date().toISOString(),
        });
        await newOrder.save();
        res.status(201).json({ message: "Improvment request sent!!" });
      }
    } catch (error) {
      res.status(409).json({ error: error.message });
      console.log(error);
    }
  };

export default router;
