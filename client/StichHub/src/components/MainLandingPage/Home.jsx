import React from "react";
import NavBar from "./NavBar";
import {
  demo3d,
  DemoShirtIcon,
  Configurator3d,
  OnlineMeasurement,
  sweingmachine,
  HomeDelivery,
} from "../../assets/MainLandingPage/Icons";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative bg-primary">
      <NavBar />
      <div className="relative p-20 flex justify-evenly z-[5]">
          {/* leftside */}
          <div className="w-[50%] mt-[60px]">
            {/* Heading */}
            <div className="text-left text-8xl text-gray-100 font-semibold">
              <span>
                STICH <br /> YOUR WAY{" "}
              </span>
            </div>

            {/* Text */}
            <p className="text-white text-left pt-8 pb-8 text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis aliquam tenetur, dicta sequi ea natus excepturi
            </p>

            {/* Buttons */}
            <div className="flex">
              <button className="bg-white p-3 rounded-xl w-[200px] drop-shadow-2xl">
                <span className="text-[1.5rem] text-black">Get Started</span>
              </button>
              <button className="ml-[30px] text-white outline outline-white p-3 rounded-xl w-[200px] drop-shadow-2xl">
                <span className="text-[1.5rem] ">Demo</span>
              </button>
            </div>

            {/* MajorFeature */}
            <div className="pt-8 justify-start content-start">
              <p className="text-white text-base text-left mb-6">
                Major Features:
              </p>
              <div className="flex">
                <div className="flex">
                  <img src={Configurator3d} className="pt-1 pb-1" />
                  <div className="ml-2 text-white text-xl text-left">
                    3D <br /> Configurator
                  </div>
                </div>
                <div className="flex ml-6">
                  <img src={OnlineMeasurement} className="pt-1 pb-1" />
                  <div className="ml-2 text-white text-xl text-left">
                    Online <br /> Measurements
                  </div>
                </div>
                <div className="flex ml-6">
                  <img src={sweingmachine} className="pt-1 pb-1" />
                  <div className="ml-2 text-white text-xl text-left">
                    Variety <br /> of Tailors
                  </div>
                </div>
                <div className="flex ml-6">
                  <img src={HomeDelivery} className="pt-1 pb-1" />
                  <div className="ml-2 text-white text-xl text-left">
                    Home <br /> Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* rightside */}
          <div className="flex relative">
            {/* Model */}
            <div>
              <img src={demo3d} className="relative z-[5] pr-20" />
              <div className="absolute w-[330px] h-[571px] top-[25px] left-[10px] modelGradient z-0"></div>
            </div>

            {/* buttons */}
            <div className="mt-[80px]">
              <div className="p-3 rounded-lg bg-gray-800 flex flex-col justify-center hover:bg-black hover:cursor-pointer drop-shadow-2xl">
                <img src={DemoShirtIcon} className="w-[50px] ml-3" />
                <p className="text-sm text-white mt-2">Short Sleeve</p>
              </div>
              <div className="p-3 mt-10 rounded-lg bg-gray-800 flex flex-col justify-center hover:bg-black hover:cursor-pointer drop-shadow-2xl">
                <img src={DemoShirtIcon} className="w-[50px] ml-3" />
                <p className="text-sm text-white mt-2">Short Sleeve</p>
              </div>
              <div className="p-3 mt-10 rounded-lg bg-gray-800 flex flex-col justify-center hover:bg-black hover:cursor-pointer drop-shadow-2xl">
                <img src={DemoShirtIcon} className="w-[50px] ml-3" />
                <p className="text-sm text-white mt-2">Short Sleeve</p>
              </div>
            </div>
          </div>
        </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-peach w-[500px] h-[500px] top-[-100px] left-[-260px] z-0"></div>
    </div>
  );
};

export default Home;
