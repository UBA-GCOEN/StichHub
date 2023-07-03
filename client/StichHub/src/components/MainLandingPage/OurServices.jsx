import React from "react";
import { forcustomers, fortailors } from "../../assets/MainLandingPage/Icons";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div id="ourServices" className="h-[100%] lg:h-[100vh] relative lg:p-20 lg:ml-20 lg:mr-20">
      <div className="relative z-[5]">
        {/* Title */}
        <div id="title" className="relative flex justify-normal lg:ml-0 ml-6">
          <span className="text-left lg:text-left lg:text-6xl  font-semibold">
            OUR <br /> SERVICES
          </span>
        </div>

        {/* Card Containers */}
        <div id="cardContainer" className="mt-5 lg:flex lg:flex-row lg:p-10 lg:mt-6 lg:justify-evenly">
          {/* Customer Card */}
          <div id="customerCard" className="lg:block">
            <div id="customerCardTitle" className="">
              <span className="text-left text-lg lg:text-3xl">FOR CUSTOMERS</span>
            </div>
            <div
              id="customerCardContent"
              className="lg:w-[350px] lg:h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap lg:bg-black/40 transform transition duration-500 hover:scale-105"
            >
              <img src={forcustomers} className="lg:w-[150px] w-[90px]" alt="a group of people with yellow heads" />
              <p className="text-xs lg:text-base px-20 lg:px-10 py-5 lg:p-3">
                You can choose your own style, see how it looks as well as choose from a choice of tailor whom you want to get your clothes stitched from.{" "}
              </p>
              <Link to="/CustomersPage">
                <button  className="px-4 py-2 lg:p-4 bg-white text-black rounded-xl text-lg font-medium lg:m-5 cursor-pointer transition-all duration-300 ease-in hover:bg-black hover:text-white hover:border hover:border-white">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>

          {/* Tailor Card */}
          <div id="tailorCard" className="lg:mt-0 mt-5">
            <div id="tailerCardTitle" className="">
              <span className="text-lg lg:text-3xl">FOR TAILORS</span>
            </div>
            <div
              id="tailerCardContent"
              className="lg:w-[350px] lg:h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap lg:bg-black/40 transform transition duration-500 hover:scale-105"
            >
              <img src={fortailors} className="lg:h-[100px] h-[70px] m-6" alt="a blue and yellow sewing machine" />
              <p className="text-xs lg:text-base px-20 lg:px-10 py-5 lg:p-3">
                You can keep track of your orders, showcase your previous work as well as add your specialities to your profile to increase customer-base.{" "}
              </p>
              <Link to="/auth">
                <button  className="px-4 py-2 lg:p-4 bg-white text-black rounded-xl text-lg font-medium lg:m-5 cursor-pointer transition-all duration-300 ease-in hover:bg-black hover:text-white hover:border hover:border-white">
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
