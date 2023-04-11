import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ime from "../assets/img/ime.png";
import Step1 from "../components/Cart/Step1";
import Step2 from "../components/Cart/Step2";
import Step3 from "../components/Cart/Step3";
import Step4 from "../components/Cart/Step4";

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
  {
    label: "Complete Order",
    step: 4,
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

  //Start of Cart Page from here
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
            <Step1 />
          ) : step == 2 ? (
            <Step2 />
          ) : step == 3 ? (
            <Step3 />
          ) : (
            <Step4 />
          )}

          {/* Conditions for displaying buttons on each page of stepper */}
          <div className="flex justify-center gap-10  mt-6">
            {step > 1 && (
              <button
                className="bg-gray-300 w-[30%]  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
                onClick={handleBack}
              >
                Previous
              </button>
            )}
            {/* button for 2nd 3rd Page */}
            {step < 4 && step != 1 && (
              <button
                className="bg-blue-500 w-[30%] px-6 py-1.5 rounded-lg text-white hover:bg-blue-600 top-0"
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {/* button for 4th page */}
            {step == 4 && (
              <button
                className="bg-blue-500 w-[30%] px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
                onClick={handleNext}
                disabled={activeStep === totalSteps}
              >
                Submit
              </button>
            )}
            {/* button for step1 */}
            {step == 1 && (
              <button
                className="bg-blue-500 mt-[1400px]  lg:mt-[35%] w-[30%] px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
                onClick={handleNext}
                disabled={activeStep === totalSteps}
              >
                Next
              </button>
            )}
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
