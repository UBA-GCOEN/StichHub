import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

import OrderList from "../models/order.js";

export const addOrder = async (req, res) => {
  const order = req.body;
  try {
    const isTailor = await OrderList.find({ tailorId: order.tailorId });


    if (isTailor.length > 0) {
      await OrderList.updateOne(
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
      res.status(201).json({ message: "Success!! Request saved" });
    } else {
      const newOrder = new OrderList({
        tailorId: order.tailorId,
        requests: {
          customerId: req.userId,
          orderData: order,
          status: "pending",
        },
        createdAt: new Date().toISOString(),
      });
      await newOrder.save();
      res.status(201).json({ message: "Success!! Request saved" });
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
    console.error(error);
  }
};

export const getOrders = async (req, res) => {
  const tailorId = req.userId;

  try {
    const orders = await OrderList.find({ tailorId: tailorId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOrdersCustomers = async (req, res) => {
  const customerId = req.userId;

  try {
    const orders = await OrderList.find({ "requests.customerId": customerId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { orderId, requestId } = req.params;
    const { status } = req.body;

    const order = await OrderList.findById(orderId);
    const request = order.requests.id(requestId);

    request.status = status;

    await order.save();

    res.status(200).send({ message: "Order status updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to update order status" });
  }
};

export default router;
