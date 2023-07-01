import React from "react";
import Button from "../CustomerLandingPage/Button";

function CardM(prop) {
  return (
    <div className=" w-5/6 bg-primary rounded-r-full items-center justify-center my-4">
      <div className="flex items-center justify-center">
        <div className="p-2 m-2">
          <img src={prop.icon} alt={props.head+" "+props.tail}/>
        </div>
        <div className="p-2 m-2">
          <h1 className="text-xl font-semibold text-center">{prop.head}</h1>
          <h2 className="text-center text-sm text-[#b0aeae]">{prop.tail}</h2>
        </div>
        <div className="rounded-full">
          <button className="w-11 h-11 bg-gradient-to-r from-[cyan] to-[#0bb9b9]  text-black font-semibold rounded-full">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardM;
