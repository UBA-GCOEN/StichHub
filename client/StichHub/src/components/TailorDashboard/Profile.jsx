import React, { useState, useEffect, useCallback } from "react";
import Navbardark from "../Navbardark";
// import LeftView from "./LeftView";
import styled from "styled-components";
import "react-phone-number-input/style.css";
import Phoneinput from "react-phone-number-input";
import axios from "../../axios";
import { Tabs } from "./Tabs";

const fileTypes = ["JPG", "PNG", "GIF"];

const user = JSON.parse(localStorage.getItem("tailorProfile"));

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { Country, State, City } from "country-state-city";

// Main container style
const MainContainer = styled.div`
  width: 50%;

  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: 992px) {
    //This should work for Normal desktops(15 to 18 inch) only.
    width: 20%;
  }
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
    background: gray;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid
    ${({ step }) => (step === "completed" ? "black" : "lightgray")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: black;
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
  background: lightgray;
  :active {
    @apply scale-[0.98];
  }
  :disabled {
    @apply text-black cursor-not-allowed;
    background: #black;
  }
`;

//list for defining no of steps pages required
const steps = [
  {
    label: "profile",
    step: 1,
  },
  {
    label: "portfolio",
    step: 2,
  },
];

const Profile = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [tailorDetails, setTailorDetails] = useState(null);

  
    const fetchData = async () => {
      setIsLoading(true);
      try{
        const res = await axios.get("/tailors/specific");
        setTailorDetails(res.data);
        console.log(res.data);
        setIsLoading(false);
  
      } catch(error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    useEffect(() => {
      fetchData();
    }, [1]);
  

    
  console.log(tailorDetails.name);

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

  const Step1 = () => {
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [value, setValue] = useState();
    return (
      <>
      {isLoading?
        
        <h1>Loading...</h1>
        :      
      
      <div className="ml-[10%] mt-0 mr-10">
        
        <div className="mb-5">
          <span className="font-bold text-2xl">Edit Profile</span>
        </div>
        <div className="lg:grid col-start-1 col-end-3 lg:grid-cols-2 ">
          <div xs={5}>
            <div className="mb-2 lg:mr-5">
              <label>
                <span className="text-gray-700">First Name</span>
                <br />
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.result.name}
                  className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece] disabled:text-gray-500"
                  placeholder="Vishal"
                  disabled={user?.result.name}
                  required
                />
              </label>
            </div>
          </div>
          <div xs={6}>
            <div className="mb-2 col-start-1 col-end-3">
              <label>
                <span className="text-gray-700">Last Name</span>
                <br />
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.result.name}
                  className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece] disabled:text-gray-500"
                  placeholder="John cook"
                  disabled={user?.result.name}
                  required
                />
                <br />
              </label>
            </div>
          </div>

          <div className="mb-2 col-start-1 col-end-3">
            <label>
              <span className="text-gray-700">Email address</span>
              <div className="relative text-gray-600 focus-within:text-gray-400 col-start-1 col-end-3">
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.result.email}
                  placeholder="your@email.com"
                  className=" text-black shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece] disabled:text-gray-500"
                  disabled
                />
                <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <span className="bg-green-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </div>
            </label>
          </div>
          <div className="mb-2 col-start-1 col-end-3">
            <label>
              <span className="text-gray-700">Address</span>
              <br />
              <input
                name="address"
                type="address"
                defaultValue={tailorDetails?tailorDetails.address : ""}
                className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                placeholder="House number and street name"
                required
              />{" "}
            </label>
          </div>
          {/* phoneno country selector hooks used here */}
          <div className="col-start-1 col-end-3">
            <span className="text-gray-700">Phone No.</span>
            <br />
            <Phoneinput
              className="shadow-sm shadow-blue-400 pl-2 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
              placeholder="Enter phone number"
              value="8788878786"
              defaultCountry="IN"
              onChange={setValue}
            />
          </div>
          <div xs={5}>
            <div className="mb-2 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2 lg:mr-5">
              <label>
                <span className="text-gray-700">City</span>
                <br />
                <input
                  name="city"
                  type="city"
                  defaultValue="Nagpur"
                  className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                  placeholder="Nagpur"
                  required
                />{" "}
              </label>
            </div>
          </div>
          <div>
            <div className="mb-2 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
              <label>
                <span className="text-gray-700">State</span>
                <br />
                <input
                  name="state"
                  type="state"
                  defaultValue="Maharashtra"
                  className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                  placeholder="Maharashtra"
                  required
                />{" "}
              </label>
            </div>
          </div>
          <div className="mb-2 col-start-1 col-end-3">
            <label>
              <span className="text-gray-700">Password</span>
              <br />
            </label>
          </div>
          <div className="relative text-gray-600 focus-within:text-gray-400 col-start-1 col-end-3 mb-5">
            <input
              type="password"
              name="q"
              placeholder="**********"
              defaultValue="Vskvishal"
              className=" text-black shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <span className="bg-green-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
        <button className="bg-gray-300  w-fit mr-5  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0">
          Save
        </button>
        <button
          className="bg-blue-500 w-fit px-6 py-1.5 rounded-lg text-white hover:bg-blue-600 top-0"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
  }
        
  </>
    );
  };

  const Step2 = () => {
    return (
      <div className="justify-center">
        <Tabs color="pink" />

        <button
          className="bg-gray-300 w-fit ml-5 mr-5 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
          onClick={handleBack}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 w-fit px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
          onClick={handleNext}
          disabled={activeStep === totalSteps}
        >
          Submit
        </button>
      </div>
    );
  };

  return (
    <div className="bg-primary h-full">
      <div className="bg-white rounded-xl h-fit w-[90%] mr-[5%] lg:mr-[0%] lg:w-[70%]   ml-[5%] lg:ml-[20%] pt-1">
        {/* Stepper Definition  */}
        <MainContainer>
          <StepContainer width={width}>
            {steps.map(({ step, label }) => (
              <StepWrapper key={step}>
                <StepStyle
                  step={activeStep >= step ? "completed" : "incomplete"}
                >
                  <StepCount>{step}</StepCount>
                </StepStyle>
              </StepWrapper>
            ))}
          </StepContainer>
        </MainContainer>

        {/* Stepper Buttons Display and onclick handler definition */}
        <div className="flex items-center justify-center h-auto pt-[10px] ">
          <div className="bg-white p-6 rounded-lg w-full lg:max-w-5xl">
            {/* pages displaying as per current state of stepper  */}
            {step === 1 ? <Step1 /> : <Step2 />}

            {/* Conditions for displaying buttons on each page of stepper */}
            <div className="flex justify-center gap-10  mt-6">
              {/* button for 4th page */}
            </div>
          </div>
          <br />

          {/* {step==2? <div>
             </div> : <div></div>} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
