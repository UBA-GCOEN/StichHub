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

const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));