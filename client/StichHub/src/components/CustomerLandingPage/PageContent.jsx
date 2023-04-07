import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import { demo3d } from "../../assets/MainLandingPage/Icons";
function PageContent() {
  return (
    <div>
      <div className="flex justify-around w-screen h-screen ">
        <div className="absolute w-[330px] h-[571px] top-28 left-6 modelGradient z-[1]"></div>
        <div className="w-2/5">
          <img src={demo3d} />
        </div>
        <div className="text-center text-6xl text-white w-2/5 h-72  items-center p-5 leading-relaxed tracking-wide">
          Let's Become <br /> the <br />{" "}
          <span className="font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600">
            New Normal
          </span>
          <div className="bg-slate-900 h-10 text-lg w-fit rounded-xl p-1 justify-center items-center ml-auto mr-auto m-2">
            <h1>
              <MouseIcon
                className="m-1"
                style={{ color: "aqua" }}
              />
              <span className="m-1">
                Click on the button to customize the model
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
