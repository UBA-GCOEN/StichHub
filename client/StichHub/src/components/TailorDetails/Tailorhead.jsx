import React from "react";
import { tailorCards } from "../../constants/home";

function Tailorhead(props) {
  return (
    <div className="bg-[white] drop-shadow-lg rounded-lg w-auto flex justify-between p-2 m-2">
      <div className=" ml-1">
        <h1 className="font-semibold text-base">Yadav Ji</h1>
        <h3 className="text-[#636262] text-sm ">Khayali Dresses</h3>
      </div>
      <div className="text-right">
        <button className="bg-gradient-to-t from-black via-black to-gray-400  hover:bg-gradient-to-b text-white font-semibold py-2 px-4 rounded-md">
          $999
        </button>
      </div>
    </div>
  );
}

export default Tailorhead;
