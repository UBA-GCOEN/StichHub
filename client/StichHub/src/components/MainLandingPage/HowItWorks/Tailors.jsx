import React from "react";
import {
  CreatProfileIcon,
  TakeOrdersIcon,
  HomeDelivery,
  tailor,
  delivery,
} from "../../../assets/MainLandingPage/Icons";

const Tailors = () => {
  return (
    <div className="h-[100vh] relative p-20 ml-20 mr-20">
      <div className="relative z-[5]">
        {/* Title */}
        <div id="title" className="relative flex flex-col">
          <span className="text-right text-4xl font-medium">
            HOW IT WORKS <br /> FOR TAILORS ?
          </span>
          <div className="flex mt-3  justify-end">
            <div className="p-3 bg-white w-[6px] rounded-full"></div>
            <div className="relative flex w-[300px] h-[2px] bg-white mt-2"></div>
          </div>
        </div>

        {/* Steps */}
        <div id="steps" className="flex justify-evenly">
          {/* Step1 */}
          <div
            id="step1"
            className="w-[250px] flex flex-col justify-center mt-16"
          >
            <div
              id="stepNumber"
              className="p-6 bg-[#B100AA] text-center w-[85px] rounded-full ml-20"
            >
              1
            </div>
            <img id="stepLogo" src={CreatProfileIcon} className="m-10" />
            <div id="stepTitle">
              CREATE <br /> PROFILE
            </div>
          </div>
          {/* Step1 */}
          <div
            id="step2"
            className="w-[250px] flex flex-col justify-center mt-16"
          >
            <div
              id="stepNumber"
              className="p-6 bg-[#B100AA] text-center w-[85px] rounded-full ml-20"
            >
              2
            </div>
            <img id="stepLogo" src={TakeOrdersIcon} className="m-10" />
            <div id="stepTitle">
              TAKE <br /> ORDERS
            </div>
          </div>
          {/* Step1 */}
          <div
            id="step3"
            className="w-[250px] flex flex-col justify-center mt-16"
          >
            <div
              id="stepNumber"
              className="p-6 bg-[#B100AA] text-center w-[85px] rounded-full ml-20"
            >
              3
            </div>
            <img id="stepLogo" src={tailor} className="m-14" />
            <div id="stepTitle">
              STITCH <br /> CLOTHS
            </div>
          </div>
          {/* Step1 */}
          <div
            id="step4"
            className="w-[250px] flex flex-col justify-center mt-16"
          >
            <div
              id="stepNumber"
              className="p-6 bg-[#B100AA] text-center w-[85px] rounded-full ml-20"
            >
              4
            </div>
            <img id="stepLogo" src={delivery} className="m-10" />
            <div id="stepTitle">SEND FOR DELIVERY</div>
          </div>
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-peach w-[570px] h-[570px] top-[160px] right-[-350px] z-0 blur-xl"></div>
      <div className="absolute circleGradient-blue w-[200px] h-[200px] bottom-[200px] left-[-50px] z-0 blur-xl"></div>
    </div>
  );
};

export default Tailors;
