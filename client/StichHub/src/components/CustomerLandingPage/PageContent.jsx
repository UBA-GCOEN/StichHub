import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import { demo3d } from "../../assets/MainLandingPage/Icons";
import { DemoShirtIcon } from "../../assets/MainLandingPage/Icons";
import { useNavigate } from "react-router-dom";





  function PageContent({ history }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/");
    };

  return (
    <div>
      <div className="relative flex justify-around w-screen h-screen ">
        {/* Div containing image of girl and background gradient */}
        <div className="relative w-2/5 p-4">
          <img
            src={demo3d}
            className="relative z-[5] w-[300px] h-[571px]" alt="a cartoon of a person"
          />
          <div className="absolute float-left w-[330px] h-[571px] top-12 left-3 modelGradient z-[0]" />
        </div>
        {/* Div end */}

        {/* Div containing buttons (From Main Page) */}
        <div className="absolute left-96 top-32">
          <div className="p-3 mt-2 rounded-lg bg-gray-800 flex flex-col justify-center hover:bg-black hover:cursor-pointer drop-shadow-2xl">
            <img
              src={DemoShirtIcon}
              className="w-[50px] ml-3" alt="a blue shirt with black background"
            />
            <p className="text-sm text-white mt-2">Short Sleeve</p>
          </div>
          <div className="p-3 mt-2 rounded-lg bg-gray-800 flex flex-col justify-center hover:bg-black hover:cursor-pointer drop-shadow-2xl">
            <img
              src={DemoShirtIcon} alt="a blue shirt with black background"
              className="w-[50px] ml-3"
            />
            <p className="text-sm text-white mt-2">Short Sleeve</p>
          </div>
          <div className="p-3 mt-2 rounded-lg bg-gray-800 flex flex-col justify-center hover:bg-black hover:cursor-pointer drop-shadow-2xl">
            <img
              src={DemoShirtIcon} alt="a blue shirt with black background"
              className="w-[50px] ml-3"
            />
            <p className="text-sm text-white mt-2">Short Sleeve</p>
          </div>
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
          <div>  
            <button class="bg-[#e68600] hover:bg-[chocolate] text-black font-semibold p-1 rounded-full h-10 text-lg w-36 "onClick={handleButtonClick} >
              Start Stitching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
