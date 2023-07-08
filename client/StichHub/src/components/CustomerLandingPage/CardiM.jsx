import React from "react";

function CardiM(props) {
  return (
    <div className="m-auto">
      <div className="transition duration-500 ease-in-out border-2 border-cyan-300 w-40 h-52  rounded-[3rem] justify-items-center hover:bg-[#35343C] hover:border-[#35343C] ">
        <div className="flex w-20 h-20 items-center justify-center text-center m-auto leading-tight ">
          {/* Icon for the feature */}

          <img loading="lazy"
            className="p-1 rounded-xl w-4/5 "
            src={props.adrs}
            alt={props.head+" "+props.tail}
          />
        </div>
        <div className="text-white text-center px-2">
          {/* Description of the feature */}
          <h1 className="text-lg font-medium p-2">{props.head}</h1>
          <h2 className="text-sm cursor-pointer underline">{props.tail}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardiM;
