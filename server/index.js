import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import Razorpay from 'razorpay';
const client_Id = "rzp_test_nHQFtXIxfARQnb";
const secret = "mxO4uZBfjj6VCAFb7cFZhi3C ";
const public_Key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA570tBh6eu4+IM84VDjf9Qck+IqY4XxBD71KH3QRpfSZswd96dErUQ934SMGPBaEfB9hkyaeKcyQ5Z6enDEp8VS6K3FSGMXMPyKL9VIlfwzyy5Z/UBgmyAFgmVFlGZ1C/iUYVBbY2eMm8eYMuPJtSXJsMor7CCklb5Ok2ysCyOINLxOAecrCdUWx69e7DzZiwfAjzYZqAYNH6NehRHrnFjWjupY5fM6+GA36dI6BiV2Ju0FOHGoWLQ7/SmwgYcyuchRaazDKQ+gwsU3WVcqWHuGo5/Jlo8VY5fDspBBDN1xsGyOGzADWOO1714mpVcBY1hotBAJeZxm/v79/+Wdn0/QIDAQAB";



import test from "./routes/test.js";
import userTailorRouter from "./routes/userTailor.js";
import userCustomerRouter from "./routes/userCustomer.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to StichHub Server!");
});~
app.use("/test", test);
app.use("/userTailor", userTailorRouter);
app.use("/userCustomer", userCustomerRouter);




app.get('/create-order', async (req, res) => {
  const razorpay = new Razorpay({
    key_id: client_Id,
    key_secret: secret
  });

  const amount = 1000;
const currency = 'INR';
const options = {
  amount: amount,
  currency: currency
};

  razorpay.orders.create(options, (error, order) => {
    if (error) {
      console.error(error);
      // Handle error
    } else {
      console.log(order);
      // Redirect user to Razorpay checkout page
      res.redirect(order["checkout_url"]);
    }
  });
});


const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));