import { useState } from "react";
import React from "react";

// hadling next and previous
const handleNext = () => {
  setStep(step + 1);
  setActiveStep(activeStep + 1);
};

const handleBack = () => {
  setStep(step - 1);
  setActiveStep(activeStep - 1);
};

// steps list
const steps = [
  {
    label: "Cart",
    step: 1,
  },
  {
    label: "email",
    step: 2,
  },
  {
    label: "address",
    step: 3,
  },
  {
    label: "profileveri",
    step: 4,
  },
  {
    label: "Speciality",
    step: 5,
  },
  {
    label: "Complete",
    step: 6,
  },
];
// progress bar definition
const ProgressBar = ({ progressPercentage }) => {
  const [activeStep, setActiveStep] = useState(1);

  // nextstep incrementer
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  // decrementer
  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  // step declare
  const [step, setStep] = useState(1);
  return (
    <div className="bg-[#130F26] ">
      <div className="fixed bottom-11 h-1 w-full bg-gray-300  ">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={` h-full   ${
            progressPercentage <= 40
              ? "bg-red-600"
              : progressPercentage > 40 && progressPercentage < 100
              ? "bg-orange-600 "
              : "bg-green-500"
          }`}
        ></div>
      </div>
      {/* each step indicator */}
      {step == 1 ? (
        <div className="font-semibold fixed bottom-0 m-[1%] text-gray-400">
          {" "}
          Let's Go.......
        </div>
      ) : step == 2 ? (
        <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
          1
        </div>
      ) : step == 3 ? (
        <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
          2
        </div>
      ) : step == 4 ? (
        <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
          3
        </div>
      ) : step == 5 ? (
        <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
          4
        </div>
      ) : (
        <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
          5
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
