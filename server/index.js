import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import test from "./routes/test.js";
import userTailorRouter from "./routes/userTailor.js";
import userCustomerRouter from "./routes/userCustomer.js";
import tailorsDetails from "./routes/tailorsDetails.js";
import orders from "./routes/orders.js";
import cart from "./routes/cart.js";
import stripe from "stripe";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to StichHub Server!");
});
app.use("/test", test);
app.use("/userTailor", userTailorRouter);
app.use("/userCustomer", userCustomerRouter);
app.use("/tailors", tailorsDetails);
app.use("/order", orders);
app.use("/cart", cart);

//Stripe
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

app.post("/payment", async (req, res) => {
  const { items, email } = req.body;
  try {
    // Create a new checkout session
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Russian",
            },
            unit_amount: "6000" * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/cart/success",
      cancel_url: "http://localhost:5173/cart/cancel",
      // customer_email: 'sidd@test',
    });
    // Return the session ID to the client
    res.json({ id: session.id });
  } catch (error) {
    // Handle any errors that occur
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
