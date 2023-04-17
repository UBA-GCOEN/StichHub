import express from 'express';
// import { PaymentClient } from 'cashfree-sdk' ;
// const cashfree = require('cashfree-sdk').default;
// import PaymentClient from 'cashfree-sdk/dist/PaymentClient';
// import Cashfree from '@cashfreepayments/cashfree-sdk';
// import CashfreeClient from '../cashfree.js';
// import addBeneficiary from '../cashfree.js';
import Razorpay from 'razorpay';
const client_Id = "rzp_test_nHQFtXIxfARQnb";
const secret = "mxO4uZBfjj6VCAFb7cFZhi3C";
const public_Key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA570tBh6eu4+IM84VDjf9Qck+IqY4XxBD71KH3QRpfSZswd96dErUQ934SMGPBaEfB9hkyaeKcyQ5Z6enDEp8VS6K3FSGMXMPyKL9VIlfwzyy5Z/UBgmyAFgmVFlGZ1C/iUYVBbY2eMm8eYMuPJtSXJsMor7CCklb5Ok2ysCyOINLxOAecrCdUWx69e7DzZiwfAjzYZqAYNH6NehRHrnFjWjupY5fM6+GA36dI6BiV2Ju0FOHGoWLQ7/SmwgYcyuchRaazDKQ+gwsU3WVcqWHuGo5/Jlo8VY5fDspBBDN1xsGyOGzADWOO1714mpVcBY1hotBAJeZxm/v79/+Wdn0/QIDAQAB";




// const payment=require('@cashfreepayments/cashfree-sdk');
const router = express.Router();
//let cashfree = new cashfreeSandbox.Cashfree(paymentSessionId);
// const cashfree = new CashfreeClient();





export const getTest = (req, res) => {
  res.send("Server Connect");
//   let Payouts = Cashfree.Payouts;
// Payouts.Init({
//   ENV: "TEST",
//   ClientID: client_Id,
//   ClientSecret: secret,
//   PublicKey: public_Key
// });
 


// Payouts.Beneficiary.Add({
//   beneId: "JOHN18012",
//   name: "john doe",
//   email: "johndoe@cashfree.com",
//   phone: "9876543210",
//   bankAccount: "00001111222233",
//   ifsc: "HDFC0000001",
//   address1: "ABC Street",
//   city: "Bangalore",
//   state: "Karnataka",
//   pincode: "560001",
// }).then(function (res) {
//   console.log(res);
// });



// const config = {
//   PGCID: client_Id,
//   PGSECRET: secret,
//   ENV: 'TEST' // Or 'PROD'
// };

// const paymentClient = new PaymentClient(config);

// const order = {
//   orderId: 'ORD0001',
//   orderAmount: '100',
//   orderCurrency: 'INR',
//   orderNote: 'Test order',
//   customerName: 'John Doe',
//   customerPhone: '9876543210',
//   customerEmail: 'johndoe@example.com',
//   returnUrl: 'http://example.com/success',
//   notifyUrl: 'http://example.com/notify'
// };

// try {
//   const data =  paymentClient.generateToken();
//   const paymentToken = data['cftoken'];
//   order.tokenData = paymentToken;

//   // Pass the order to your front-end for payment processing
//   res.json({ success: true, data: order });
// } catch (error) {
//   console.error(error);
//   res.json({ success: false, error: error.message });
// }


// Replace YOUR_KEY_ID and YOUR_KEY_SECRET with your actual API keys
const razorpay = new Razorpay({
  key_id: client_Id,
  key_secret: secret
});


  try {
    const amount = 1000; // The amount of the payment in paise (i.e., 1000 paise = Rs. 10)
    const currency = 'INR'; // The currency of the payment
    const options = {
      amount: amount,
      currency: currency
    };
    const order =  razorpay.orders.create(options);
    console.log("done");
    // res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
  
};













//payment intialization



export default router