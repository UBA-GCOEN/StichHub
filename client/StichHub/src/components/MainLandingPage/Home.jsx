import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import {
  DemoShirtIcon,
  Configurator3d,
  OnlineMeasurement,
  sweingmachine,
  HomeDelivery,
} from "../../assets/MainLandingPage/Icons";
import DemoModel from "./Model/DemoModel";
import { Canvas } from "@react-three/fiber";
import { useCustomization } from "../../contexts/LandingPageDemo";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const Home = () => {
  const { demoButtons, demoButton, setDemoButton } = useCustomization();

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data.
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 5, y: down ? my : 0 });
  });

  return (
    <div id="" className="my-10 lg:pt-10 lg:mt-10 h-[100vh] relative">
      <div className="relative lg:px-20 pt-10 flex flex-col lg:flex-row justify-evenly z-[5]">
        {/* Mobile Model */}
        <div className="flex relative lg:hidden">
          {/* Model */}
          <div className="h-[50vh] w-[100vw]">
            <Canvas
              {...bind()}
              style={{ x, y, touchAction: "none" }}
              className="relative z-[5]"
              camera={{ zoom: 4.0 }}
            >
              <DemoModel speed="2"/>
            </Canvas>
            <div className="absolute w-[330px] h-[571px] top-[25px] left-[10px] modelGradient z-0"></div>
          </div>

          {/* buttons */}
          <div className="z-[9999] absolute right-0 top-14">
            {demoButtons.map((item, index) => (
              <div
                key={index}
                className={`p-2 w-fit bg-black/80 rounded-3xl m-5 cursor-pointer  flex justify-center items-center
                ${
                  item.text === demoButton.text
                    ? "border-[2px] border-blue-400 hover:bg-black/80"
                    : "hover:bg-cyan-900"
                }`}
                onClick={() => setDemoButton(item)}
              >
                <img loading="lazy" src={item.img} className={item.style} alt={item.alt}/>
                <p className="hidden text-xs text-white mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* leftside */}
        <div className="lg:w-[50%] mt-5 lg:mt-[60px] relative z-[5] ">
          {/* Heading */}
          <div className="text-center z-[5] lg:text-left lg:text-8xl text-gray-100 font-semibold">
            <span>
              STITCH <br /> YOUR WAY{" "}
            </span>
          </div>

          {/* Text */}
          <p className="z-[5] relative text-white text-center lg:text-left py-4 px-10 lg:px-0 lg:py-8 text-xs lg:text-xl">
            Choose your style make your own trend. Select the one you want to get your clothes stitched from!
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-normal">
  <Link to="/auth">
    <button className="bg-white px-[1%] py-2 lg:p-3 rounded-xl w-[30vw] lg:w-[200px] drop-shadow-2xl transition duration-300 ease-in-out hover:bg-gray-200 hover:text-black">
      <span className="text-lg lg:text-[1.5rem] text-black">Get Started</span>
    </button>
  </Link>
  <Link to="/Configurator">
    <button className="ml-[30px] text-white outline outline-white w-[30vw] px-3 py-2 lg:p-3 rounded-xl lg:w-[200px] drop-shadow-2xl transition duration-300 ease-in-out hover:bg-white hover:text-black">
      <span className="text-lg lg:text-[1.5rem]">Demo</span>
    </button>
  </Link>
</div>



          {/* MajorFeature */}
          <div className="hidden xl:block pt-8 justify-start content-start">
            <p className="text-white text-base text-left mb-6" style={{fontWeight:"bold",fontSize:"2rem",padding:".5rem 1rem 1rem 0"}}>
              Major Features:
            </p>
            <div className="flex">
              <div className="flex">
                <img src={Configurator3d} className="pt-1 pb-1" alt="a person standing" loading="lazy"/>
                <div className="ml-2 text-white text-xl text-left">
                  3D <br /> Configurator
                </div>
              </div>
              <div className="flex ml-6">
                <img src={OnlineMeasurement} className="pt-1 pb-1" alt="a yellow measuring tape on a black background" loading="lazy"/>
                <div className="ml-2 text-white text-xl text-left">
                  Online <br /> Measurements
                </div>
              </div>
              <div className="flex ml-6">
                <img src={sweingmachine} className="pt-1 pb-1" alt="a blue sewing machine with a pink handle" loading="lazy"/>
                <div className="ml-2 text-white text-xl text-left">
                  Variety <br /> of Tailors
                </div>
              </div>
              <div className="flex ml-6">
                <img src={HomeDelivery} className="pt-1 pb-1" alt="a blue truck with wheels" loading="lazy"/>
                <div className="ml-2 text-white text-xl text-left">
                  Home <br /> Delivery
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* rightside */}
        <div className="hidden lg:flex relative">
          {/* Model */}
          <div>
            <Canvas className="relative z-[5]" camera={{ zoom: 4 }}>
              <DemoModel speed="1"/>
            </Canvas>
            <div className="absolute w-[330px] h-[571px] top-[25px] left-[10px] modelGradient z-0"></div>
          </div>

          {/* buttons */}
          <div className="mt-[80px]">
            {demoButtons.map((item, index) => (
              <div
                key={index}
                className={`p-3 bg-black/80 rounded-3xl m-5 cursor-pointer 
                ${
                  item.text === demoButton.text
                    ? "border-[2px] border-blue-400 hover:bg-black/80"
                    : "hover:bg-cyan-900"
                }`}
                onClick={() => setDemoButton(item)}
              >
                <img src={item.img} className={item.style} alt={item.text} loading="lazy"/>
                <p className="text-sm text-white mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-peach w-[500px] h-[500px] top-[-100px] left-[-260px] z-0"></div>
    </div>
  );
};

export default Home;
