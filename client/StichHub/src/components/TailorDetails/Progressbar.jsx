import React from "react";
import { FaStar } from "react-icons/fa";
function Progressbar() {
  return (
    <div className="w-full justify-center text-center items-center">
      <div className="flex justify-center items-center content-center">
        <h2>5</h2> {/*Star Level*/}
        <FaStar color="#ebeb35" />
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 justify-center items-center">
          <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500 w-[45%] justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Progressbar;
