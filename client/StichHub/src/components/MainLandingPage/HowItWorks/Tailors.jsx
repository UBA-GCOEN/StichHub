import React from "react";
import { hiwtailor } from "../../../contants/MainLandingPage";

const Tailors = () => {
  return (
    <div className="h-[100%] sm:h-[100vh] relative pt-40  sm:p-20 sm:mx-20 mx-7">
      <div className="relative z-[5]">
        {/* Title */}
        <div id="title" className="relative flex flex-col">
          <span className="text-right  font-medium text-xl sm:text-4xl ">
            HOW IT WORKS <br /> FOR TAILORS ?
          </span>
          <div className="flex mt-3  justify-end">
            <div className="p-3 bg-white w-[6px] rounded-full"></div>
            <div className="relative flex w-[150px] sm:w-[300px] h-[2px] bg-white mt-2"></div>
          </div>
        </div>

        {/* Steps */}
        <div id="steps" className="hidden sm:flex justify-evenly">
          {/* Steps */}
          {hiwtailor.map((item, index) => (
            <div
              key={index}
              id="step1"
              className="w-[250px] flex flex-col justify-center mt-[120px]"
            >
              <div
                id="stepNumber"
                className="py-[10px] bg-[#B100AA] text-center w-[60px] h-[60px] rounded-full ml-[95px]"
              >
                {item.step}
              </div>
              <img
                id="stepLogo"
                src={item.img}
                className="mx-[80px] my-[50px]"
              />
              <div id="stepTitle" className={`text-xl ${item.style}`}>
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Steps for Mobile */}
        <div id="steps" className="sm:hidden flex flex-wrap justify-between">
          {/* Steps */}
          {hiwtailor.map((item, index) => (
            <div
              key={index}
              id="step1"
              className="w-[40vw] flex flex-col justify-center mt-16"
            >
              <div className="flex justify-center">
                <div
                  id="stepNumber"
                  className="w-10 p-1 sm:py-[10px] bg-[#B100AA] text-center sm:w-[60px] sm:h-[60px] rounded-full sm:ml-[95px] mb-5"
                >
                  {item.step}
                </div>
              </div>
              <img
                id="stepLogo"
                src={item.img}
                className="mx-[45px] sm:mx-[80px] sm:my-[50px]"
              />
              <div id="stepTitle" className={`mt-5 text-lg ${item.style}`}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-peach w-[570px] h-[570px] top-[160px] right-[-350px] z-0 blur-xl"></div>
      <div className="absolute circleGradient-blue w-[200px] h-[200px] bottom-[200px] left-[-50px] z-0 blur-xl"></div>
    </div>
  );
};

export default Tailors;
