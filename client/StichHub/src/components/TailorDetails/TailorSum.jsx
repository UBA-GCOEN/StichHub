import React from "react";
import yadav from "../../assets/Yadav.png";
function TailorSum() {
  return (
    <div className="bg-[white] rounded-lg flex justify-center p-4 m-2">
      <div>
        <div className="drop-shadow-lg flex w-60 h-60 items-center justify-center text-center mx-auto">
          <img src={yadav} />
        </div>
        <div className="justify-center items-center text-center">
          <a href="../../pages/Cart">
            <button className="drop-shadow-lg bg-[white] hover:bg-[gray] text-black font-semibold py-2 px-4 rounded-full">
              Book Appointmet
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TailorSum;
