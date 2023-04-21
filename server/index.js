import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import Razorpay from 'razorpay';


import test from "./routes/test.js";
import userTailorRouter from "./routes/userTailor.js";
import userCustomerRouter from "./routes/userCustomer.js";
import tailorsDetails from "./routes/tailorsDetails.js";

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
app.use("/tailors", tailorsDetails);


app.post('/api/form-submit', async (req, res) => {
  const formData = req.body;
  console.log(formData);


      // working need to be recode
    // const amount = 1000; 
    // const currency = 'inr';
    // const paymentMethod = await stripe.paymentMethods.create({
    //   type: 'card',
    //   card: {
    //     number: '4242424242424242',
    //     exp_month: 12,
    //     exp_year: 2025,
    //     cvc: '123',
    //   },
    // });
    
    // const paymentMethodId = paymentMethod.id;
    
    
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount,
    //   currency,
    //   payment_method: paymentMethodId,
    //   confirm: true,
    // });
    // res.json({ success: true });
    // console.log(paymentIntent);
  
    



  
  // Do something with the form data here
  
  res.send('Form submission successful!');
});



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