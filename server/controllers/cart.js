import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

import CartList from "../models/cart.js";
import OrderList from "../models/order.js";

export const addOrder = async (req, res) => {
  try {
    const customerId = req.userId;
    const orderData = req.body;    

    const cart = await CartList.findOne({ customerId });

    if (!cart) {
      const newCart = new CartList({
        customerId,
        orders: [orderData],
      });
      await newCart.save();
    } else {
      cart.orders.push(orderData);
      await cart.save();
    }

    const { orderId, tailorId } = req.params;

    const order = await OrderList.findOne({ tailorId: tailorId });

    const requests = order.requests.id(orderId);

    requests.order = true;
    await order.save();

    res.status(201).json({ message: "Order added to cart successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const getCartList = async (req, res) => {
    try {
        const cart = await CartList.find({customerId: req.userId});

        res.status(200).json(cart);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;
