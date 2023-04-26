import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { PaymentGateway } from "@cashfreepayments/cashfree-sdk";
import OrderList from "../models/order.js";

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const pg = new PaymentGateway({
  env: "TEST",
  appId: CLIENT_ID,
  secretKey: CLIENT_SECRET,
});

router.post("/", async (req, res) => {
  const { amount, orderId, customerName, customerEmail, customerPhone } =
    req.body;

  pg.orders
    .createOrders({
      orderId: orderId, // required
      orderAmount: amount, // required
      orderCurrency: "INR",
      customerName: customerName, // required
      customerPhone: customerPhone, // required
      customerEmail: customerEmail, // required
      paymentModes: "cc, dc, nb, upi, paypal, wallet",
      returnUrl: "https://stichhub-backend.vercel.app/payment/response", // required
    })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to create payment order" });
    });
});

router.post("/response", async (req, res) => {
  const data = req.body;
 
  res.redirect("https://stichhub.vercel.app/cart/success");
  
});

export default router;
