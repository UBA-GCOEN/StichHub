import React from "react";
import image1 from "../../assets/CustomerLandingPage/Room - Girl Reading - Copy@3-1707x802 (2).png";
import call from "../../assets/CustomerLandingPage/Call.png";
import provide from "../../assets/CustomerLandingPage/provide.png";
import Handle from "../../assets/CustomerLandingPage/handle.png";
function Worried() {
  return (
    <div className="w-sreen h-screen">
      {/* Section for models in spline (Now using oonly img)*/}
      <div className="text-center">
        {/* Gradient */}
        <div className="absolute opacity-70 circleGradient-peach object-cover w-[75%] h-[110%] -top-80 left-[29rem] z-0 "></div>
        {/* Gradient End */}

        <div className="w-screen font-medium text-5xl">
          <h1 className="text-white">
            Worried about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600">
              <br />
              Measurements?
            </span>
          </h1>
          <h1 className="text-white font-light text-3xl m-2 p-2">
            We Provide different Ways of measurements
          </h1>
        </div>
      </div>

      {/* Hexagonal Div */}

      {/* <div className="bg-[chocolate] relative w-[120px] h-[150px] before:content-[''] before:absolute before:left-[-45px] before:w-0 before:h-50 before:border-r-[45.5px] before:border-r-[chocolate] before:border-y-[75px] before:border-y-transparent before:border-solid before:top-0 after:content-[''] after:absolute after:right-[-45px] after:w-0 after:h-0 after:border-l-[45.5px] after:border-l-[chocolate] after:border-y-[75px] after:border-y-transparent after:border-solid after:top-0 m-12 float-left"></div> */}

      {/* Hexgonal div End */}

      <div className="flex justify-center items-center mt-8">
        <img
          src={Handle}
          className="m-4 transition-all ease-in hover:scale-110 w-60 h-64"
        />
        <img
          src={call}
          className="m-4 transition-all ease-in hover:scale-110 w-60 h-64"
        />
        <img
          src={provide}
          className="m-4 transition-all ease-in hover:scale-110 w-60 h-64"
        />
      </div>
    </div>
  );
}

export default Worried;
