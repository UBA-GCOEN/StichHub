import React, { useEffect, useState} from "react";
import Navbar from "../components/Home/Navbar";
import styled from "styled-components";
import Step1 from "../components/Cart/Step1";
import Step2 from "../components/Cart/Step2";
import validate from "../common/validation"
import "react-phone-number-input/style.css";
import { useLocation } from "react-router-dom";
import {Typography,} from "@material-tailwind/react";
import { LockClosedIcon,} from "@heroicons/react/24/solid";

import se from "../assets/img/se.webp";
//Payment Imports
import axios from "../axios";

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
  
  const handleChangeFinal = (e) => {
    const { name, value } = e.target;
    console.log(name)
    console.log(value)
    setForm({ ...form, [name]: value });
   (name !== "notes" && name !== "delivery" && name !== "service")? setError((prev) => {
      let getError;
        if(e.target.classList.contains("noempty")){
        getError = validate.notEmpty(name, value);
        }else{
        getError = validate[name](value);
      }
      return { ...prev, ...getError };
    }): null;
  };

 const initialForm = {
    contact: "",
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

  
  const [form, setForm] = useState(initialForm);
  const [error, setError]  = useState(validate.cartFormInitial);

  const [activeStep, setActiveStep] = useState(1);
  const [step, setStep] = useState(1);

  //for handling Next step page button function
  const handleNext = () => {
    let proceedable = true;
    console.log(error)
    if(step === 2 ){
      Object.values(error).forEach((err)=>{
        if(err !== false){
          proceedable = false;
          return;
        }
      })
    }

    if(proceedable){
      setStep(step + 1);
      setActiveStep(activeStep + 1);
    }else{
      alert("Please fill all fields with valid data")
    }
   
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
              <Step1 handleChangeFinal={handleChangeFinal} />
              <div className="text-center">
                <button
                  className="bg-blue-500  w-[30%] px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
                  onClick={() => {
                    handleNext();
                  }}
                  disabled={activeStep === totalSteps}
                >
                  Next
                </button>
              </div>
            </>
          ) : step == 2 ? (
            <>
              <Step2
                form={form}
                setForm={setForm}
                error={error}
                setError={setError}
                handleChangeFinal={handleChangeFinal}
              />
            </>
          ) : (
            <>
              <div>
                <div
                  id="body"
                  className=" text-center lg:pl-[10%] md:grid-cols-1 gap-4 justify-center "
                >
                  <img
                    loading="lazy"
                    src={se}
                    className=" lg:block flex absolute lg:left-0  mt-20 w-[30%] sm:w-[40]% sm:right-0"
                    alt="a cartoon character holding a glowing shield"
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
                <span className="text-bold text-gray-500 flex justify-center text-sm mb-5">
                  Click on Pay now button to continue purchasing your orders
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
                    Pay Now
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
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Cart;
