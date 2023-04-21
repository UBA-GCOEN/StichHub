import React from "react";

function Cardi(props) {
  return (
    <div className="m-6">
      <div className="transition duration-500 ease-in-out border-4 border-cyan-300 w-40 h-52 rounded-2xl justify-items-center hover:bg-[#35343C] hover:border-[#35343C]">
        <div className="flex w-20 h-20 items-center justify-center text-center mx-auto">
          {/* Icon for the feature */}

          <img
            className="p-2 rounded-xl w-4/5 "
            src={props.adrs}
            alt=""
          />
        </div>
        <div className="text-white text-center">
          {/* Description of the feature */}
          <h1 className="text-xl font-medium p-2">{props.head}</h1>
          <h2 className="text-[18]">{props.tail}</h2>
        </div>
      </div>
    </div>
  );
}

export default Cardi;
