import React from "react";
import Button from "./Button";
import img from "../../assets/CustomerLandingPage/Group 1000001620.webp";
import { useNavigate } from "react-router-dom";


function GetList({text}) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/configurator" );
  };
  return (
    <div className="relative h-screen text-center m-2 p-2">
      {/* Gradient */}
      <div className="absolute opacity-70 circleGradient-peach object-cover w-[65%] h-[70%] top-0 -left-[40rem] z-0 "></div>
      {/* Gradient End */}

      <div className="flex justify-center items-center">
        {/* Text Part */}
        <div className="text-white text-left w-2/5">
          <h2 className="text-4xl font-semibold leading-normal w-3/5 p-2 m-2">
            Get Your clothes to fit your Body!
          </h2>
          <h3 className="text-[#E4DCCF] text-base leading-relaxed p-2 m-2">
            Why change yourself when your clothes can change for you? Get a list
            of places where you can alter your clothes or if your piece was
            ordered by our site get it altered for free.
          </h3>
          <button
            className="bg-[#e68600] hover:bg-[chocolate] text-black font-semibold p-1 rounded-full h-10 text-lg w-36"
            onClick={handleButtonClick}
          >
            {text = "Get List"}
          </button>
        </div>

        {/* Image Part */}
        <div className="w-2/5">
        <img src={img} className="h-90" loading="lazy"/>
        <img
          src={img}
          className="h-90" alt="a cartoon character pointing at a store" loading="lazy"
        />

        </div>
      </div>
    </div>
  );
}

export default GetList;
