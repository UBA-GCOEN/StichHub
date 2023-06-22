import React from "react";
import { FaStar } from "react-icons/fa";

function ProgressbarM() {
  return (
    <div className="w-full text-center">
      <div className="flex w-full justify-center items-center align-middle gap-1">
        <h2>5</h2> {/*Star Level*/}
        <FaStar color="#ebeb35" />
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 justify-center items-center">
          <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500 w-[45%] justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressbarM;
