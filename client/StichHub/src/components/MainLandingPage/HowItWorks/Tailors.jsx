import React from "react";
import { hiwtailor } from "../../../constants/MainLandingPage";

const Tailors = () => {
  return (
    <div className="h-[100%] lg:h-[100vh] relative pt-40  lg:p-20 lg:mx-20 mx-7 lg:mt-48 3xl:mt-0">
      <div className="relative z-[5]">
        {/* Title */}
        <div id="title" className="relative flex flex-col">
          <span className="text-right  font-medium text-xl lg:text-4xl ">
            HOW IT WORKS <br /> FOR TAILORS ?
          </span>
          <div className="flex mt-3  justify-end">
            <div className="p-3 bg-white w-[6px] rounded-full"></div>
            <div className="relative flex w-[150px] lg:w-[300px] h-[2px] bg-white mt-2"></div>
          </div>
        </div>

        {/* Steps */}
        <div id="steps" className="hidden lg:flex justify-evenly">
          {/* Steps */}
          {hiwtailor.map((item, index) => (
            <div
              key={index}
              id="step1"
              className="w-[250px] flex flex-col  items-center mt-16 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <div
                id="stepNumber"
                className={`relative py-[10px] bg-[#B100AA] text-center w-[60px] h-[60px] rounded-full  ${item.step!=4 ? "after:content-[''] after:w-[240px] after:h-[1px] after:bg-white after:absolute after:top-[50%] after:left-[100%] lg:after:w-[170px] xl:after:w-[230px] 2xl:after:w-[280px] 3xl:after:w-[450px]" : null}`}
              >
                {item.step}
              </div>

              <img loading="lazy"
                id="stepLogo"
                src={item.img}
                className="mx-[80px] my-[50px]
                lg:w-[80px]"
                alt="step logo"
              />
              <div id="stepTitle" className={`text-xl ${item.style}`}>
                {item.title}
              </div>

            </div>
          ))}
        </div>

        {/* Steps for Mobile */}
        <div id="steps" className="lg:hidden flex flex-wrap justify-between">
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
                  className="w-10 p-1 lg:py-[10px] bg-[#B100AA] text-center lg:w-[60px] lg:h-[60px] rounded-full lg:ml-[95px] mb-5"
                >
                  {item.step}
                </div>
              </div>
              <img loading="lazy"
                id="stepLogo"
                src={item.img}
                className="mx-[45px] lg:mx-[80px] lg:my-[50px]"
                alt="step logo"
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
