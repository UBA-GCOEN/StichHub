import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import { demo3d } from "../../assets/MainLandingPage/Icons";
import { DemoShirtIcon } from "../../assets/MainLandingPage/Icons";
import { FaTshirt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function PageContentM() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };
  return (
    <div>
      <div className="relative justify-around w-screen h-screen">
        <div className="text-center text-5xl text-white justify-center  items-center p-5 leading-tight tracking-normal">
          Let's Become <br /> the <br />{" "}
          <span className="font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600">
            New Normal
          </span>
        </div>

        {/* Div containing buttons (From Main Page) */}
        <div className="relative w-screen p-4 flex">
          <div className="w-1/5 h-1/5 p-3  rounded-lg bg-[#1C153C] flex flex-col justify-center hover:bg-black hover:cursor-pointer drop-shadow-2xl float-left mt-64">
            <FaTshirt
              color="orange"
              className="w-4/5 h-4/5 m-auto"
            />
            <p className="text-sm text-center text-white mt-2">Short Sleeve</p>
          </div>
          {/* Div containing image of girl and background gradient */}
          <div className="relative flex w-screen p-4 text-center justify-center m-auto">
            <img loading="lazy"
              src={demo3d}
              className="relative z-[5] w-36 h-80" alt="a cartoon of a person"
            />
            <div className="absolute float-left w-44 h-72 top-12 left-18 modelGradient z-[0]" />
          </div>
          {/* Div end */}
          <div className="w-20 h-24 p-3 rounded-lg bg-[#1C153C] flex flex-col justify-center hover:bg-black hover:cursor-pointer drop-shadow-2xl float-right mr-2 mt-64 ">
            <FaTshirt
              color="orange"
              className="w-4/5 h-4/5 m-auto"
            />

            <p className="text-sm text-center text-white mt-2">Short Sleeve</p>
          </div>
        </div>

        <div className="text-center text-white w-4/5  items-center  justify-center m-auto">
          <div className="bg-slate-900 h-fit text-sm w-fit rounded-xl justify-center items-center ml-auto mr-auto m-2">
            <h1 className="flex items-center justify-center p-1 m-1">
              <MouseIcon
                className="m-1"
                style={{ color: "orange" }}
              />
              <span className="m-1">Tap buttons to customize model</span>
            </h1>
          </div>
          <div>
            <button className="bg-[#e68600] hover:bg-[chocolate] text-black font-semibold p-1 rounded-full h-10 text-lg w-36"onClick={handleButtonClick}>
              Start Stitching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContentM;
