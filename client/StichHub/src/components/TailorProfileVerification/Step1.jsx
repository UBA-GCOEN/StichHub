import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import New from "../../assets/img/new.webp";
import Step2 from "./Step2";
import { Routes, Route, useNavigate } from "react-router-dom";

// user identification
const user = {
  name: "Vishal",
};

// hadling next and previous

const handleBack = () => {
  setStep(step - 1);
  setActiveStep(activeStep - 1);
};

const handleNext = () => {
  //   setStep(step + 1);
  //   setActiveStep(activeStep + 1);
  navigate("/Step2");
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

const Step1 = () => {
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();
  const handleNext = () => {
    //   setStep(step + 1);
    //   setActiveStep(activeStep + 1);
    navigate("./Step2");
  };
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

  // total steps
  const totalSteps = steps.length;
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;
  return (
    <div>
      <div className="grid grid-cols-3 text-whie ml-[15%] mt-[20%] lg:mt-[5%] font-poppins">
        <div className="col-start-1 col-end-3 ">
          <h1 className="text-white text-3xl font-bold mb-5">
            Hi {user.name},
          </h1>
          <h1 className="select-none	 text-white text-5xl font-bold tracking-wider  lg:mr-[20%]	">
            Complete these few steps for your verification
          </h1>
          <div className="grid gird-col-3 text-white mt-10">
            <div className="flex col-start-1 col-end-2">
              <label class="p-5 my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-blue-500 text-lg font-medium text-white">
                1
              </label>
              <label className="text-white font font-semibold text-xl lg:text-2xl m-3 ">
                Confirm Email/ Mobile
              </label>
            </div>
            <div className="flex col-start-2 col-end-3">
              <label class="p-5 my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-blue-500 text-lg font-medium text-white">
                2
              </label>
              <label className="text-white font font-semibold text-xl lg:text-2xl mt-3 ml-3">
                Confirm Address
              </label>
            </div>
            <div className="flex col-start-1 col-end-2 lg:col-start-3 lg:col-end-4">
              <label class="p-5 my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-blue-500 text-lg font-medium text-white">
                3
              </label>
              <label className="text-white font font-semibold text-xl lg:text-2xl m-3">
                Perosnal Identity Verification
              </label>
            </div>

            <div className="flex col-start-2 col-end-3 lg:col-start-1 lg:col-end-2">
              <label class="p-5 my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-blue-500 text-lg font-medium text-white">
                4
              </label>
              <label className="text-white font font-semibold text-xl lg:text-2xl m-3 ">
                Confirm Spaciality
              </label>
            </div>

            <div className="flex col-start-1 col-end-2 lg:col-start-2 lg:col-end-3">
              <label class="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                <img
                  src="https://img.icons8.com/external-bearicons-flat-bearicons/256/external-verified-reputation-bearicons-flat-bearicons.png"
                  className="w-[70%]" alt="a blue circular badge representing a verified reputation"
                ></img>
              </label>
              <label className="text-white font font-semibold text-xl lg:text-2xl m-3 mt-7 ">
                Verified
              </label>
            </div>
          </div>
          <button
            className="bg-blue-500 rounded-xl text-white font-semibold tracking-wide p-3 mt-5 lg:mb-[20%]"
            onClick={handleNext}
          >
            Get Started
          </button>
          <Routes>
            <Route path="/Step2" element={<Step2 />} />
          </Routes>
        </div>
        <div className="hidden lg:block col-start-3 col-end-4">
          <img src={New} className="w-50% ml-[-40%] mr-20" alt="a blue shield with pink tick and a lock"/>
        </div>
      </div>
      <ProgressBar progressPercentage={0} />
    </div>
  );
};

export default Step1;
