import React from "react";
import Calculator from "../../assets/CustomerLandingPage/Calculator.png";
import Enter from "../../assets/CustomerLandingPage/Enter.png";
import Tailor from "../../assets/CustomerLandingPage/Tailor.png";
function WorriedM() {
  return (
    <div className="w-sreen h-screen pt-40 md:pt-0">
      {/* Section for models in spline (Now using oonly img)*/}
      <div className="text-center">
        <div className="w-full font-medium text-5xl">
          <h1 className="text-white">
            Worried about
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600">
              <br />
              Measurements?
            </span>
          </h1>
        </div>
      </div>

      <div className="justify-center items-center mt-8">
        <div className="bg-[#1E1837] rounded-[2.2rem] p-2 m-2 flex items-center justify-center">
          <img
            src={Tailor}
            className="p-2 transition-all ease-in hover:scale-110 w-24 h-24" alt="a person with a sewing machine"
          />
          <h1 className=" text-white text-xl text-center">
            Call tailor Home to get Measurements
          </h1>
        </div>

        <div className="bg-[#1E1837] rounded-[2.2rem] p-2 m-2 flex items-center justify-center">
          <img
            src={Calculator}
            className="p-2 transition-all ease-in hover:scale-110 w-24 h-24" alt="a calculator and a note"
          />
          <h1 className=" text-white text-xl text-center">
            Calculate Measurements with our Technology
          </h1>
        </div>

        <div className="bg-[#1E1837] rounded-[2.2rem] p-2 m-2 flex items-center justify-center">
          <img
            src={Enter}
            className="p-2 transition-all ease-in hover:scale-110 w-24 h-24" alt="a yellow enter button"
          />
          <h1 className=" text-white text-xl text-center">
            Enter Measurements by Self
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WorriedM;
