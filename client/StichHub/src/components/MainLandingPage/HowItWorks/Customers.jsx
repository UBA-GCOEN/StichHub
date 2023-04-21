import React from "react";
import { hiwcustomer, appointment } from "../../../constants/MainLandingPage";

const Customers = () => {
  return (
    <div className="h-[100%] lg:h-[100vh] relative pt-40  lg:p-20 lg:mx-20 mx-7">
      <div className="relative z-[5] ">
        {/* Title */}
        <div id="title" className="relative flex flex-col">
          <span className="text-left text-xl lg:text-4xl font-medium">
            HOW IT WORKS <br /> FOR CUSTOMERS ?
          </span>
          <div className="flex mt-3">
            <div className="relative flex w-[180px] lg:w-[320px] h-[2px] bg-white mt-2"></div>
            <div className="p-3 bg-white w-[6px] rounded-full"></div>
          </div>
        </div>

        {/* Steps */}
        <div id="steps" className="hidden lg:flex justify-evenly">
          {/* Steps */}
          {hiwcustomer.map((item, index) => (
            <div
              key={index}
              id="step1"
              className="w-[250px] flex flex-col justify-center mt-16"
            >
              <div
                id="stepNumber"
                className="py-[10px] bg-[#B100AA] text-center w-[60px] h-[60px] rounded-full ml-[95px]"
              >
                {item.step}
              </div>
              <img id="stepLogo" src={item.img} className="mx-[80px] my-[50px]" />
              <div id="stepTitle" className={`text-xl ${item.style}`}>{item.title}</div>
            </div>
          ))}
        </div>

        {/*For Mobile Steps */}
        <div id="steps" className="lg:hidden flex flex-wrap justify-between">
          {/* Steps */}
          {hiwcustomer.map((item, index) => (
            <div
              key={index}
              id="step1"
              className="w-[40vw] flex flex-col justify-center mt-16"
            >
              <div className="flex justify-center">
              <div
                id="stepNumber"
                className=" w-10 p-1 lg:py-[10px] bg-[#B100AA] text-center lg:w-[60px] lg:h-[60px] rounded-full lg:ml-[95px] mb-5"
              >
                {item.step}
              </div>
              </div>
              <img id="stepLogo" src={item.img} className="mx-[45px] lg:mx-[80px] lg:my-[50px]" />
              <div id="stepTitle" className={`mt-5 text-lg ${item.style}`}>{item.title}</div>
            </div>
          ))}
        </div>

        {/* or section */}
        <div id="or" className="relative flex flex-col mt-20">
          <span className="text-center text-2xl lg:text-3xl">or</span>
          <div id="orContent" className="flex justify-center pt-5">
            <span className="p-2 text-lg lg:text-2xl">
              <i>directly Book an appointment with your favourite tailor.</i>
            </span>
            <img src={appointment} />
          </div>
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-blue w-[570px] h-[570px] top-[160px] left-[-350px] z-0 blur-xl"></div>
      <div className="absolute circleGradient-peach w-[200px] h-[200px] bottom-[200px] right-[-50px] z-0 blur-6xl"></div>
    </div>
  );
};

export default Customers;
