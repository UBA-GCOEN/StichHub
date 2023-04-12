import React from "react";
import { forcustomers, fortailors } from "../../assets/MainLandingPage/Icons";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div id="ourServices" className="h-[100%] sm:h-[100vh] relative sm:p-20 sm:ml-20 sm:mr-20">
      <div className="relative z-[5]">
        {/* Title */}
        <div id="title" className="relative flex justify-normal sm:ml-0 ml-6">
          <span className="text-left sm:text-left sm:text-6xl  font-semibold">
            OUR <br /> SERVICES
          </span>
        </div>

        {/* Card Containers */}
        <div id="cardContainer" className="mt-5 sm:flex sm:flex-row sm:p-10 sm:mt-6 sm:justify-evenly">
          {/* Customer Card */}
          <div id="customerCard" className="sm:block">
            <div id="customerCardTitle" className="">
              <span className="text-left text-lg sm:text-3xl">FOR CUSTOMERS</span>
            </div>
            <div
              id="customerCardContent"
              className="sm:w-[350px] sm:h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap sm:bg-black/40"
            >
              <img src={forcustomers} className="sm:w-[150px] w-[90px]" />
              <p className="text-xs sm:text-base px-20 sm:px-10 py-5 sm:p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.sit
                amet consectetur, adipisicing elit.{" "}
              </p>
              <Link to="/CustomersPage">
                <button className="px-4 py-2 sm:p-4 bg-white text-black rounded-xl text-lg font-medium sm:m-5 cursor-pointer">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>

          {/* Tailor Card */}
          <div id="tailorCard" className="sm:mt-0 mt-5">
            <div id="tailerCardTitle" className="">
              <span className="text-lg sm:text-3xl">FOR TAILORS</span>
            </div>
            <div
              id="tailerCardContent"
              className="sm:w-[350px] sm:h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap sm:bg-black/40"
            >
              <img src={fortailors} className="sm:h-[100px] h-[70px] m-6" />
              <p className="text-xs sm:text-base px-20 sm:px-10 py-5 sm:p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.sit
                amet consectetur, adipisicing elit.{" "}
              </p>
              <Link to="/auth">
                <button className="px-4 py-2 sm:p-4 bg-white text-black rounded-xl text-lg font-medium sm:m-5 cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-peach w-[670px] h-[570px] top-[220px] left-[475px] z-0 blur-xl"></div>
    </div>
  );
};

export default OurServices;
