import React from "react";
import Button from "./Button";
import img from "../../assets/CustomerLandingPage/Group 1000001620.png";

function GetList() {
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
          <div className="m-2 p-2">
            <Button text="Get List" />
          </div>
        </div>

        {/* Image Part */}
        <div className="w-2/5">
          <img loading="lazy"
            src={img}
            className="h-90"
          />
        </div>
      </div>
    </div>
  );
}

export default GetList;
