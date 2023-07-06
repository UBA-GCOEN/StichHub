import React, { useEffect, useState } from "react";
import Navbar from "../components/Home/Navbar";
import styled from "styled-components";
import Step1 from "../components/Cart/Step1";
import Step2 from "../components/Cart/Step2";
import Step3 from "../components/Cart/Step3";
import Step4 from "../components/Cart/Step4";
import imr from "../assets/img/imr.webp";
import el from "../assets/img/el.webp";
import el2 from "../assets/img/el2.webp";
import im from "../assets/img/im.webp";
import "react-phone-number-input/style.css";
import Phoneinput from "react-phone-number-input";
import ime from "../assets/img/ime.webp";
import { useLocation } from "react-router-dom";
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

import se from "../assets/img/se.webp";
import img from "../assets/img/img.webp";
//Payment Imports
import axios from "../axios";
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

//used for Country selector field
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { Country, State, City } from "country-state-city";

// Main container style
const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`;

// stepcontainer circle styling
const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: #cfe2f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    background: #4ea5f4;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

// on completed step style
const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid
    ${({ step }) => (step === "completed" ? "#4ea5f4" : "#cfe2f3")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: #cfe2f3;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 19px;
  color: #4ea5f4;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 30px;
`;

const ButtonStyle = styled.button`
  @apply rounded text-white cursor-pointer w-[90px] p-2 border-0;
  background: #4ea5f4;
  :active {
    @apply scale-[0.98];
  }
  :disabled {
    @apply text-black cursor-not-allowed;
    background: #cfe2f3;
  }
`;

const CheckMark = styled.div`
  @apply text-[26px] font-semibold text-green-500 rotate-[-46deg] -scale-x-100;
  -ms-transform: scaleX(-1) rotate(-46deg);
  /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg);
`;

//list for defining no of steps pages required
const steps = [
  {
    label: "Cart",
    step: 1,
  },
  {
    label: "Delivery",
    step: 2,
  },
  {
    label: "Payment",
    step: 3,
  },
];

//Main Definition
const Cart = () => {
  //some custom react hooks
  const [value, setValue] = useState();

  const [activeStep, setActiveStep] = useState(1);

  //for handling next step button function
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  //for handling previous step button function
  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };
  const [step, setStep] = useState(1);

  //for handling Next step page button function
  const handleNext = () => {
    setStep(step + 1);
    setActiveStep(activeStep + 1);
  };

  //for handling Previous step page button function
  const handleBack = () => {
    setStep(step - 1);
    setActiveStep(activeStep - 1);
  };

  //steps length
  const totalSteps = steps.length;

  //page width setter
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  //checkbox on click button enable
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  // When the button is clicked
  const btnHandler = () => {
    alert("The buttion is clickable!");
  };

  //Fetching the Cart List
  const [cartList, setCartList] = useState([]);

  const getCartList = async () => {
    try {
      const res = await axios.get("/cart/list");
      setCartList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCartList();
  }, [2]);

  //Start of Cart Page from here
  const [qty, setqty] = useState(0);
  const [price, setPrice] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleqty = () => {
    setqty(qty + 1);
  };
  const handleqtydown = () => {
    setqty(qty - 1);
  };

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  // card number , expiration date field validation hooks
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  const initialForm = {
    contact: "+91 ",
    country: "",
    state: "",
    service: "",
    delivery: "",
    city: "",
    pincode: "",
    address: "",
    address2: "",
    email: "",
    notes: "",
    firstname: "",
    lastname: "",
    paymentstatus: "",
    total: "2700.00",
  };

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue1, setSelectedValue1] = useState("");

  // Function to handle radio button change
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleRadioChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const [form, setForm] = useState(initialForm);
  const handleChangeFinal = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const stepFormSubmit = () => {
    setForm({ ...form, service: selectedValue });
    setForm({ ...form, delivery: selectedValue1 });

  };

  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  //? Payment
  const handlePayment = async () => {
    const userId = user.result._id;
    const orderId = `${userId}-${Date.now()}`;
    const paymentData = {
      amount: form.total,
      orderId: orderId,
      customerName: user.result.name,
      customerEmail: user.result.email,
      customerPhone: "9876543210",
    };
    try {
      const res = await axios.post(`/payment`, paymentData);
      window.location.href = res.data.paymentLink;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-5">
      <Navbar />

      {/* Stepper Definition  */}
      <MainContainer>
        <StepContainer width={width}>
          {steps.map(({ step, label }) => (
            <StepWrapper key={step}>
              <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
                {activeStep > step ? (
                  <CheckMark
                    className="
                @apply text-[26px] font-semibold text-green-500 rotate-[-46deg] -scale-x-100;
                -ms-transform: scaleX(-1) rotate(-46deg);
                /* IE 9 */
                -webkit-transform: scaleX(-1) rotate(-46deg);"
                  >
                    L
                  </CheckMark>
                ) : (
                  <StepCount>{step}</StepCount>
                )}
              </StepStyle>
              <StepsLabelContainer>
                <StepLabel key={step}>{label}</StepLabel>
              </StepsLabelContainer>
            </StepWrapper>
          ))}
        </StepContainer>
      </MainContainer>

      {/* Stepper Buttons Display and onclick handler definition */}
      <div className="flex items-center justify-center h-auto pt-[60px] ">
        <div className="bg-white p-6 rounded-lg w-full lg:max-w-5xl">
          <h2 className="text-lg font-medium mb-4 pl-5">Step {step} of 4</h2>

          {/* pages displaying as per current state of stepper  */}
          {step === 1 ? (
            <>
              <div className="h-screen pt-20">
                <div className="grid grid-cols-2">
                  {/* header */}
                  <h1 className="mb-5 ml-0 text-left text-2xl font-bold">
                    Orders
                  </h1>
                  <h1 className="hidden lg:block mb-5 pl-10 text-right text-2xl font-bold">
                    Payment Summary
                  </h1>
                </div>

                {/* first block/orders block */}

                <div className="mx-auto max-w-5xl justify-center px-1 lg:px-6 md:flex md:space-x-6 xl:px-0">
                  {cartList.map((items, index) => {
                    return (
                      <div className="rounded-lg md:w-3/3">
                        {items.orders.map((order, indexOrder) => {
                          return (
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                              {/* <img src={imr} className="h-[30%]" /> */}
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-gray-900">
                                    {order.orderData.category}
                                    {order.orderData.clothDetails.backDetails}
                                    {order.orderData.clothDetails.collar}
                                    {order.orderData.clothDetails.fabric}
                                    {order.orderData.clothDetails.sleeve}
                                  </h2>
                                  <p className="mt-1 text-xs text-gray-700">
                                    COLOR:{" "}
                                    <b>{order.orderData.clothDetails.color}</b>
                                  </p>
                                  <p className="mt-1 text-xs text-gray-700">
                                    SIZE: <b>XI</b>
                                  </p>
                                </div>
                                <div className=" hidden lg:flex justify-between sm:space-y-6 sm:mt-0  sm:space-x-6 m-[40px]  ">
                                  <div className="flex  space-x-4">
                                    <p className="text-md mt-1 font-bold">
                                      {qty ? qty * qty : 0}
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                  <div className="flex items-center border-gray-100">
                                    <button
                                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                      onClick={handleqtydown}
                                    >
                                      {" "}
                                      -{" "}
                                    </button>
                                    <input
                                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                      type="number"
                                      value={qty}
                                      min={1}
                                    />
                                    <button
                                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                      onClick={handleqty}
                                    >
                                      {" "}
                                      +{" "}
                                    </button>
                                  </div>
                                  <div className="lg:hidden flex items-center space-x-4">
                                    <p className="text-sm">₹2590.00</p>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}

                  {/* Payment summary block */}
                  <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div>
                      <h1 className="lg:hidden text-lg md-5">
                        Payment Summary
                      </h1>
                      <div className="pb-4">
                        <h6 className="text-xs text-red-900 mb-3">
                          Having Discount Code?
                        </h6>
                        <div className="grid grid-cols-2 gap-1">
                          <input
                            type="text"
                            className=" border solid  rounded-md"
                          ></input>
                          <button className="  text-center ml-3 bg-blue-700 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600">
                            Apply
                          </button>
                        </div>
                      </div>
                      <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Order Summary</p>
                        <p className="text-gray-700">₹2590.00</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-700">Additional Service</p>
                        <p className="text-gray-700">₹4.99</p>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <p className="text-gray-700">Coupon</p>
                        <p className="text-green-500">₹4.99</p>
                      </div>
                      <hr className="my-4" />
                      <div className="flex justify-between">
                        <p className="text-lg font-bold">Total Amount</p>
                        <div className="">
                          <p className="mb-1 text-lg font-bold">₹2,600.00</p>
                          <p className="text-sm text-gray-700">including GST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* image */}
                <img
                  src={im}
                  className="hidden lg:block w-[20%] ml-[600px] absolute" alt="a cellphone with a credit card and gift boxes"
                />
                {/* Additional Services block */}
                <div className=" m-5 lg:m-10 font-bold">
                  Additional Services
                  <div className="grid grid-row-3 gap-0 lg:mr-[50%]">
                    {/* first service */}
                    <div className="rounded-lg md:h-1/3">
                      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <input
                          name="service"
                          type="radio"
                          value={99}
                          onChange={handleChangeFinal}
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">
                              CARE + Package{" "}
                            </h2>
                            <p className="mt-1 text-xs text-gray-500">
                              One Month Alteration, Premium Fabric
                              Cloths,Delivery Free
                            </p>
                          </div>
                          <div className=" lg:flex justify-between sm:space-y-6 sm:mt-0  sm:space-x-6 m-[10px]  ">
                            <div className="flex  space-x-4">
                              <p className="text-md mt-1 font-bold">₹99.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 2nd Service */}
                    <div className="rounded-lg md:h-1/3">
                      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <input
                          name="service"
                          type="radio"
                          value={9}
                          onChange={handleChangeFinal}
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">
                              Environment Friendly
                            </h2>
                            <p className="mt-1 text-xs text-gray-700">
                              Donate old cloths for green growth
                            </p>
                          </div>
                          <div className="  ">
                            <div className="flex  space-x-4">
                              <p className="text-md mt-1 font-bold">₹9.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery service blocks */}
                <div className="m-5 lg:m-10 font-bold">
                  Delivery
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {/* fedex */}
                    <div className="rounded-lg md:h-1/3">
                      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <input
                          name="delivery"
                          type="radio"
                          value={99}
                          onChange={handleChangeFinal}
                        />
                        <img
                          src="https://cdn.iconscout.com/icon/free/png-256/fedex-1-282177.png"
                          className=" lg:w-[17%] sm:w-[17%]" alt="a company logo with text fedex"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">
                              FedX Delivery{" "}
                            </h2>
                            <p className="mt-1 text-xs text-gray-700">
                              Expected Delivery
                            </p>
                            <p className="mt-1 text-xs text-gray-700">
                              Friday, 29th 2023
                            </p>
                          </div>
                          <div className=" ">
                            <div className="flex  space-x-4">
                              <p className="text-md mt-1 font-bold">₹79.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Delhivery */}
                    <div className="rounded-lg md:h-1/3">
                      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <input
                          name="delivery"
                          type="radio"
                          value={79}
                          onChange={handleChangeFinal}
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/726/726455.png"
                          className=" lg:w-[10%] sm:w-[10%]" alt="a red and yellow truck"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">
                              Delhivery
                            </h2>
                            <p className="mt-1 text-xs text-gray-700">
                              Expected Delivery
                            </p>
                            <p className="mt-1 text-xs text-gray-700">
                              Friday, 29th 2023
                            </p>
                          </div>
                          <div className="  ">
                            <div className="flex  space-x-4">
                              <p className="text-md mt-1 font-bold">₹79.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="bg-blue-500  w-[30%] px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
                    onClick={() => {
                      handleNext();
                      stepFormSubmit();
                    }}
                    disabled={activeStep === totalSteps}
                  >
                    Next
                  </button>
                </div>
                <img
                  src={el}
                  className="h-[30%] absolute float-right right-0 " alt="a black and purple background"
                />
                <img
                  src={el2}
                  className="h-[30%] absolute float-left left-0 " alt="a black and blue gradient"
                />
              </div>
            </>
          ) : step == 2 ? (
            <>
              <div className="grid lg:grid-cols-2  md:grid-cols-1 gap-4 justify-center ">
                <div className="block max-w-lg rounded-lg bg-white p-6 ">
                  {/* Contact details form */}
                  <form>
                    <span className="text-gray-700 font-bold">
                      1. CONTACT DETAILS (Please Enter Your Details)
                    </span>
                    <br />
                    <br />
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
                      <div xs={5}>
                        <div className="mb-2">
                          <label>
                            <span className="text-gray-700">First Name</span>
                            <br />
                            <input
                              type="text"
                              name="firstname"
                              value={form.firstname}
                              onChange={handleChangeFinal}
                              className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                              placeholder="John cooks"
                              required
                            />
                          </label>
                        </div>
                      </div>
                      <div xs={6}>
                        <div className="mb-2">
                          <label>
                            <span className="text-gray-700">Last Name</span>
                            <br />
                            <input
                              type="text"
                              name="lastname"
                              value={form.lastname}
                              onChange={handleChangeFinal}
                              className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                              placeholder="John cooks"
                              required
                            />
                            <br />
                          </label>
                        </div>
                      </div>
                      {/* phoneno country selector hooks used here */}
                      <div>
                        <span className="text-gray-700">Phone No.</span>
                        <br />
                        <input
                          type="tel"
                          name="contact"
                          className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                          placeholder="Enter phone number"
                          value={form.contact}
                          onChange={handleChangeFinal}
                        />
                      </div>
                      <div className="mb-2">
                        <label>
                          <span className="text-gray-700">Email address</span>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChangeFinal}
                            className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                            placeholder="john.cooks@example.com"
                            required
                          />
                        </label>
                      </div>
                    </div>
                    {/* Delivery details form */}
                    <span className="text-gray-700 font-bold mt-5">
                      2. DELIVERY DETAILS (Please Enter Your Delivery Details)
                    </span>
                    <br />
                    <br />
                    {/*  country selector hooks used here */}

                    <div className="mb-2">
                      <div>
                        <span>Country/ Region</span>
                        <input
                          name="country"
                          type="country"
                          value={form.country}
                          onChange={handleChangeFinal}
                          className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                          placeholder="Country"
                          required
                        />{" "}
                      </div>

                      <label>
                        <span className="text-gray-700">Street address</span>
                        <br />
                        <input
                          name="address"
                          type="address"
                          onChange={handleChangeFinal}
                          value={form.address}
                          className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                          placeholder="House number and street name"
                          required
                        />{" "}
                        <input
                          name="address2"
                          type="text"
                          onChange={handleChangeFinal}
                          value={form.address2}
                          className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                          placeholder="Appartment, suite, landmark, etc. (optional)"
                        />{" "}
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div xs={5}>
                        <div className="mb-2">
                          <label>
                            <span className="text-gray-700">Town/ City</span>
                            <br />
                            <input
                              name="city"
                              type="city"
                              onChange={handleChangeFinal}
                              value={form.city}
                              className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                              placeholder=""
                              required
                            />{" "}
                          </label>
                        </div>
                      </div>
                      <div xs={7}>
                        <div className="mb-2">
                          <label>
                            <span className="text-gray-700">State</span>
                            <br />
                            <input
                              name="state"
                              type="state"
                              onChange={handleChangeFinal}
                              value={form.state}
                              className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                              placeholder=""
                              required
                            />{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <label>
                        <span className="text-gray-700">Pincode</span>
                        <br />
                        <input
                          name="pincode"
                          type="pincode"
                          onChange={handleChangeFinal}
                          value={form.pincode}
                          className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                          placeholder=""
                          required
                        />{" "}
                      </label>
                    </div>

                    <div className="mb-2">
                      <label>
                        <span className="text-gray-700">
                          Order Notes (optional)
                        </span>
                        <br />
                        <textarea
                          name="notes"
                          class="country"
                          value={form.notes}
                          onChange={handleChangeFinal}
                          className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                          rows="7"
                          placeholder="notes about your order delivery e.g special notes"
                        ></textarea>
                      </label>
                    </div>
                  </form>
                </div>
                {/* order information block */}
                <div
                  xs={6}
                  className="justify-center w-full  lg:w-[300px] rounded-2xl "
                >
                  <div className="shadow-2xl rounded-2xl  ">
                    <h4 className="pt-4 pl-8 pb-4 font-bold md:items-center">
                      <span>Order Information</span>
                    </h4>
                    

                    <div className="m-10 mt-5">
                      
                      
                      <hr></hr>
                      <div className="mb-2 flex justify-between mt-5">
                        <p className="text-gray-700">Order Summary</p>
                        <p className="text-gray-700">₹2590.00</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-700">Additional Service</p>
                        <p className="text-gray-700">₹4.99</p>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <p className="text-gray-700">Coupon</p>
                        <p className="text-green-500">₹4.99</p>
                      </div>
                      <hr className="my-4" />
                      <div className="flex justify-between">
                        <p className="text-lg font-bold">Total Amount</p>
                        <div className="">
                          <p className="mb-1 text-lg font-bold">₹2,600.00</p>
                          <p className="text-sm text-gray-700 mb-5">
                            including GST
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={img}
                  className="hidden left-[-6%] absolute h-auto top-[100%] lg:block" alt="a cartoon character riding a yellow scooter"
                />
                <img
                  src={ime}
                  alt="a cartoon character riding a yellow scooter"
                  className="hidden lg:block absolute top-[95%] h-[35%] right-[10%]  "
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <div
                  id="body"
                  className=" text-center lg:pl-[10%] md:grid-cols-1 gap-4 justify-center "
                >
                  <img
                    src={se}
                    className=" hidden lg:block flex absolute lg:left-0  mt-20 w-[30%] sm:w-[40]% sm:right-0" alt="a cartoon character holding a glowing shield"
                  />
                  <div className="block max-w-lg rounded-lg bg-white p-6 ">
                    {/* payment form */}
                    <form></form>
                  </div>

                  {/* Order information block */}
                  
                  <div className="justify-center w-full lg:w-[300px] rounded-2xl lg:ml-[28%] lg:mt-3 ">
                    <div className="shadow-2xl rounded-2xl ">
                      <h4 className="pt-4 pb-4 font-bold md:items-center">
                        <span>Order Information</span>
                      </h4>

                      <div className="m-10 mt-5">
                       
                        <div className="mb-2 flex justify-between mt-5">
                          <p className="text-gray-700">Order Summary</p>
                          <p className="text-gray-700">₹2590.00</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-gray-700">Additional Service</p>
                          <p className="text-gray-700">₹4.99</p>
                        </div>
                        <div className="mt-2 flex justify-between">
                          <p className="text-gray-700">Shipping</p>
                          <p className="text-gray-700">₹100.00</p>
                        </div>
                        <div className="mt-2 flex justify-between">
                          <p className="text-gray-700">Coupon</p>
                          <p className="text-green-500">₹4.99</p>
                        </div>

                        <hr className="my-4" />
                        <div className="flex justify-between">
                          <p className="text-lg font-bold">Total Amount</p>
                          <div className="">
                            <p className="mb-1 text-lg font-bold">₹2,700.00</p>
                            <p className="text-sm text-gray-700 mb-5">
                              including GST
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Typography
                  variant="medium"
                  color="gray"
                  className="mt-2 flex mb-2 text-lg items-center justify-center gap-2 font-normal opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted

                </Typography>
                <span className="text-bold text-gray-500 flex justify-center text-sm mb-5">Click on Pay now button to continue purchasing your orders
</span>
                <div className="flex flex-col lg:flex-row justify-center gap-3">
                  <button
                    className="bg-gray-300 lg:w-[30%]  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
                    onClick={handleBack}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-blue-500 lg:w-[30%] lg:ml-5 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600 top-0"
                    onClick={handlePayment}
                  >
                    Pay Now {form.total}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Conditions for displaying buttons on each page of stepper */}
          <div className="flex justify-center gap-10  mt-6">
            {step > 1 && step != 3 && step != 4 && (
              <button
                className="bg-gray-300 w-[30%]  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
                onClick={handleBack}
              >
                Previous
              </button>
            )}
            {/* button for 2nd 3rd Page */}
            {step < 4 && step != 1 && step != 3 && (
              <button
                className="bg-blue-500 w-[30%] px-6 py-1.5 rounded-lg text-white hover:bg-blue-600 top-0"
                onClick={handleNext}
              >
                Next
              </button>
            )}

            {/* button for step1 */}
          </div>
        </div>
        <br />

        {/* {step==2? <div>
             </div> : <div></div>} */}
      </div>
    </div>
  );
};

export default Cart;
