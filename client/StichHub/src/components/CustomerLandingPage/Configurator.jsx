import React from "react";
import girlimg from "../../assets/CustomerLandingPage/Girl with clothes.webp";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Configurator() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/configurator");
  };
  return (
    <div className="flex relative h-screen items-center">
      <div className="w-2/5 ml-0">
        {/* Image of girl */}
        <img src={girlimg} alt="a cartoon of a person holding a row of shirts"/>
      </div>

      <div className="w-2/5 ml-10 text-center">
        {/* text */}
        <h1 className="text-6xl m-2 p-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[chocolate] to-[#f8be51]">
          3D Configurator
        </h1>
        <h3 className="text-3xl m-2 p-2 text-white font-medium">
          Makes it easy
        </h3>
        <h5 className="text-base w-3/5 mx-auto p-2  text-white font-normal">
          Try on your clothes on a 3D Model , beforehand to know how your piece
          will turn out.
        </h5>
      </div>
      <div className="absolute left-64 bottom-56">
        <button class="bg-[#e68600] hover:bg-[chocolate] text-black font-bold py-2 px-4 rounded-full"onClick={handleButtonClick}>
          TRY NOW!
        </button>
      </div>
    </div>
  );
}

export default Configurator;
