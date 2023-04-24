import React from "react";
import { FaHeart } from "react-icons/fa";

function Tailorhead(propsData) {
  return (
    <div className=" drop-shadow-lg  rounded-lg w-full flex  p-2 m-2">
      <div className="flex w-full">
        <h1 className="font-semibold text-4xl w-1/5 text-white">
          {propsData.propsData.item.name}
        </h1>
        <h3 className="m-1 text-[#636262] text-sm w-3/5 ">
          {propsData.propsData.item.city},{propsData.propsData.item.pincode}
        </h3>
      </div>

      {/* <div className="text-right">
        <button className="bg-gradient-to-t from-black via-black to-gray-400  hover:bg-gradient-to-b text-white font-semibold py-2 px-4 rounded-md">
          ₹ {propsData.propsData.item.prizerange[0]} <br /> - ₹{" "}
          {propsData.propsData.item.prizerange[1]}
        </button>
      </div> */}
    </div>
  );
}

export default Tailorhead;
