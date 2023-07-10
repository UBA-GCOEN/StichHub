import React from "react";

function Tailorhead(propsData) {
  return (
    <div className="rounded-lg w-full flex p-2 mt-4 items-center">
      <div className="flex w-full justify-between items-center">
        <h1 className="font-bold text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-teal-400 to-gray-300 ">
          {propsData.propsData.item.name}
        </h1>
        <h3 className="m-1 text-gray-300 text-base">
          {propsData.propsData.item.city}, {propsData.propsData.item.pincode}
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
