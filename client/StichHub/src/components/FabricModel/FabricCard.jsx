import React from "react";
import Button from "../CustomerLandingPage/Button";

function FabricCard(prop) {
  return (
    <div>
      <div className="relative border-2 border-cyan-300 h-max w-52 rounded-2xl p-4 m-2 text-center justify-center items-center ">
        <div className="mx-auto w-32 h-32">
          <img src={prop.adrs} />
        </div>
        <div>
          <h2 className="text-3xl font-semibold m-2 p-2">{prop.head}</h2>
          <h2 className="p-2 m-2">{prop.tail}</h2>
        </div>
        <Button text="Proceed" />
      </div>
    </div>
  );
}

export default FabricCard;
