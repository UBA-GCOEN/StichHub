import React, { useState } from "react";


import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";

import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import se from "../../assets/img/se.png";
import img from "../../assets/img/img.png";

//Payment Imports
import { loadStripe } from "@stripe/stripe-js";

//Card Number Regular Expression
function formatCardNumber(e) {
  const val = e.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return e;
  }
}

//Card Expiration Date format verifier
function formatExpires(e) {
  return e
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

// main definition
const Step3 = () => {
  // card number , expiration date field validation hooks
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");


  //Payment 
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SCERET_KEY);
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const paymentData = { items:[{name: "Russian", price: "6000"}], email: 'sidd@test' };
      const res = await axios.post("/payment", paymentData);

      // console.log(res.data);

      const result = await stripe.redirectToCheckout({
        sessionId: res.data.id,
      });

      if (result.error) {
        console.log(result.error.message);
      }

    } catch (error) {
      console.log(error);
    }
  };

  //   block start from here
  return (
    <div>
      <div
        id="body"
        className="grid lg:grid-cols-2  lg:pl-[10%] md:grid-cols-1 gap-4 justify-center "
      >
        <img
          src={se}
          className=" hidden lg:block flex absolute lg:left-0 mt-20 w-[30%] sm:w-[40]% sm:right-0" alt="a cartoon character holding a glowing shield
          "
        />
        <div class="block max-w-lg rounded-lg bg-white p-6 ">
          {/* payment form */}
          <form onSubmit={handleSubmit}>
            <span className="text-gray-700 font-bold text-lg ">Payment</span>
            <br />
            <br />

            {/* Tabs for payment methods */}
            <Card className="w-full max-w-[24rem]  ">
              <CardBody>
                <Tabs value={type} className="overflow-visible  ">
                  {/* tabs header */}
                  <TabsHeader className="relative z-0 h-full  ">
                    <Tab
                      value="card"
                      className="w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece] "
                    >
                      <input type="radio" onChange={() => setType("card")} />
                      <label className="ml-2 text-sm ">CARD</label>
                    </Tab>
                    <Tab
                      value="bank"
                      className="w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    >
                      <input type="radio" onChange={() => setType("bank")} />
                      <label className="ml-2">BANK</label>
                    </Tab>
                    <Tab
                      value="upi"
                      className=" w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    >
                      <input type="radio" onChange={() => setType("upi")} />
                      <label className="ml-2">UPI</label>
                    </Tab>
                    <Tab
                      value="cod"
                      className=" w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    >
                      <input type="radio" onChange={() => setType("cod")} />
                      <label className="ml-2">COD</label>
                    </Tab>
                  </TabsHeader>
                  {/* tabs body */}
                  <TabsBody
                    className="!overflow-x-hidden !overflow-y-visible "
                    animate={{
                      initial: {
                        x: type === "card" ? 400 : -400,
                      },
                      mount: {
                        x: 0,
                      },
                      unmount: {
                        x: type === "card" ? 400 : -400,
                      },
                    }}
                  >
                    {/* tab body panels for each method 1.Card Payment */}
                    <TabPanel value="card" className="p-0 ">
                      <form className="mt-5 flex flex-col gap-4">
                        <div className="my-0">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-4 font-medium"
                          >
                            Card Details
                          </Typography>
                          <span>Card Number</span>
                          <br />
                          <div class="relative text-gray-600 focus-within:text-gray-400">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                              <button
                                type="submit"
                                class="p-1 focus:outline-none focus:shadow-outline"
                              >
                                <CreditCardIcon className="h-6 w-6 ml-2 text-blue-gray-300" />
                              </button>
                            </span>
                            <input
                              type="number"
                              name="card_number"
                              id="card_number"
                              className=" text-black pl-14 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                            />
                          </div>

                          <span className="text-gray-700 ">
                            Expiration Date
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            CVV
                          </span>
                          <br />
                          <div className="mb-4 flex items-center gap-4">
                            <input
                              type="text"
                              maxLength={5}
                              className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                              // value={formatExpires(cardExpires)}
                              // onChange={(event) => setCardExpires(event.target.value)}
                              containerProps={{ className: "min-w-[72px]" }}
                            />

                            <input
                              type="text"
                              maxLength={4}
                              className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                              containerProps={{ className: "min-w-[72px]" }}
                            />
                          </div>
                          <span className="text-gray-700">
                            Card Holder Name
                          </span>
                          <br />
                          <input className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]" />
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="default-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Save Card Details
                          </label>
                        </div>
                        <button
                          size="lg"
                          className="h-auto p-3"
                          onClick={handlePayment}
                        >
                          Pay Now
                        </button>
                        <Typography
                          variant="small"
                          color="gray"
                          className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                        >
                          <LockClosedIcon className="-mt-0.5 h-4 w-4" />{" "}
                          Payments are secure and encrypted
                        </Typography>
                      </form>
                    </TabPanel>

                    {/* Tabpanel2 for bank payment */}
                    <TabPanel value="bank" className="p-0">
                      <form className="mt-1 flex flex-col gap-4 scroll-m-0">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-4 ml-2 font-medium"
                        >
                          Bank Details
                        </Typography>

                        <label
                          for="banks"
                          class="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Select Bank
                        </label>
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Choose Bank</option>
                          <option value="US">Central Bank Of India</option>
                          <option value="CA">Bank Of India</option>
                          <option value="FR">
                            Punjab National Bank of india
                          </option>
                          <option value="DE">Bharat Bank</option>
                        </select>
                        <div className="mb-5 mt-5">
                          <span className="text-gray-700 mt-5">
                            Bank Acount Number
                          </span>
                          <br />
                          <input
                            maxLength={16}
                            className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                          />
                        </div>
                        <div className="mb-5">
                          <span className="text-gray-700 mt-3">
                            Account Holder Name
                          </span>
                          <br />
                          <input
                            type="text"
                            maxLength={16}
                            className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                          />
                        </div>
                        <Button
                          size="lg"
                          className="h-auto p-3"
                          onClick={handlePayment}
                        >
                          Pay Now
                        </Button>
                        <Typography
                          variant="small"
                          color="gray"
                          className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                        >
                          <LockClosedIcon className="-mt-0.5 h-4 w-4" />{" "}
                          Payments are secure and encrypted
                        </Typography>
                      </form>
                    </TabPanel>

                    {/* Tabpanel3 for upi payment */}
                    <TabPanel value="upi" className="p-0 scroll ">
                      <form className="mt-12 flex flex-col gap-4">
                        <Button
                          size="lg"
                          className="h-auto p-3"
                          onClick={handlePayment}
                        >
                          Pay Now
                        </Button>
                        <Typography
                          variant="small"
                          color="gray"
                          className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                        >
                          <LockClosedIcon className="-mt-0.5 h-4 w-4" />{" "}
                          Payments are secure and encrypted
                        </Typography>
                      </form>
                    </TabPanel>

                    {/* tabpanel4 for cod payment */}
                    <TabPanel value="cod" className="p-0">
                      <form className="mt-12 flex flex-col gap-0">
                        <div className="mb-5">
                          <span className="text-gray-700 mt-3 mb-2">
                            Your Delivery Address
                          </span>
                          <br />
                          <input
                            type="text"
                            disabled
                            className="border  w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                            placeholder="IIT,Khapari"
                            maxLength={16}
                          />
                        </div>
                        <Typography
                          variant="small"
                          color="gray"
                          className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                        >
                          <LockClosedIcon className="-mt-0.5 h-4 w-4" />{" "}
                          Payments are secure and encrypted
                        </Typography>
                      </form>
                    </TabPanel>
                  </TabsBody>
                </Tabs>
              </CardBody>
            </Card>
          </form>
        </div>

        {/* Order information block */}
        <div className="justify-center w-full  lg:w-[300px] rounded-2xl lg:ml-0 lg:mt-3 ">
          <div className="shadow-2xl rounded-2xl  ">
            <h4 className="pt-4 pl-8 pb-4 font-bold md:items-center">
              <span>Order Information</span>
            </h4>
            <img
              src={img}
              className="m-10 mt-0 mb-[5px] object-fill w-[73%] h-[180px] rounded-[10px] border border-solid border-[#cecece]" alt="a cartoon character riding a yellow scooter"
            />

            <div className="m-10 mt-5">
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700 font-bold">
                  {" "}
                  Teal Brown Kurti Full (Cotton Silk)
                </p>
              </div>
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Size:</p>
                <p class="text-gray-700 font-bold">XI</p>
                <p class="text-gray-700">Color:</p>
                <p class="text-gray-700 font-bold">Red</p>
              </div>
              <hr></hr>
              <div class="mb-2 flex justify-between mt-5">
                <p class="text-gray-700">Order Summary</p>
                <p class="text-gray-700">₹2590.00</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-700">Additional Service</p>
                <p class="text-gray-700">₹4.99</p>
              </div>
              <div class="mt-2 flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">₹100.00</p>
              </div>
              <div class="mt-2 flex justify-between">
                <p class="text-gray-700">Coupon</p>
                <p class="text-green-500">₹4.99</p>
              </div>

              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total Amount</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">₹2,700.00</p>
                  <p class="text-sm text-gray-700 mb-5">including GST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
