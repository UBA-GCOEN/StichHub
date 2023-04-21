import { React, useState } from "react";
import Navbardark from "../components/Navbardark";
import FabricCard from "../components/FabricModel/FabricCard";
import truck from "../assets/CustomerLandingPage/Icons/truck.png";
import fabric from "../assets/CustomerLandingPage/Icons/fabric.png";
import decor from "../assets/decor.png";
import logo from "../assets/logo/Long - Logo Transparent (White).png";
import SideMenu from "../components/FabricModel/SideMenu";
import CardM from "../components/FabricModel/CardM";

function FabricModel() {
  const [isMobile, setIsMobile] = useState(false);

  // check screen size and set state variable
  window.addEventListener("resize", () => {
    const isMobileView = window.innerWidth <= 845;
    if (isMobileView !== isMobile) setIsMobile(isMobileView);
  });

  // render mobile or desktop component based on isMobile state
  return <div>{isMobile ? <FabricModelM /> : <FabricModelD />}</div>;
}

// For Desktop view

const FabricModelD = () => {
  return (
    <div className=" h-screen bg-primary m-0 p-0">
      <div className="flex absolute top-[-210px]">
        {" "}
        {/* currently position fixed through pixels , to be fixed */}
        <img src={decor} />
      </div>
      <div className="absolute rounded-xl border-white border-2 w-[85%] h-[85%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        {" "}
        {/* for the outer border */}
        <div>
          {/* Nav */}
          <Navbardark />
        </div>
        <div className="relative flex justify-center items-center">
          <div className="w-2/5">
            {/* text left */}
            <h1 className="text-white font-mono font-bold text-7xl">
              Select
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[cyan] to-[#0bb9b9]">
                <br />
                Fabric
              </span>
              Selection Choices
            </h1>
          </div>
          <div className="flex w-2/5 text-white text-center p-2 m-2">
            {/* Card choices */}
            <FabricCard
              adrs={truck}
              head="Pick My Fabric"
              tail="Read the terms and conditions a bout  picking up fabric"
            />
            <FabricCard
              adrs={fabric}
              head="Leave it to tailor"
              tail="Read the terms and conditions a bout  picking up fabric"
            />
          </div>
        </div>
        <p className="text-[#bcb5b5] text-right m-4 p-2">
          Read the <u>terms and conditions</u> about picking up fabric
          <br />
          Read the <u>terms and conditions</u> about letting tailor choose the
          fabric
          <br />
        </p>
      </div>
      {/* Outer Border end */}
    </div>
  );
};

// For mobile view

const FabricModelM = () => {
  return (
    <div className="relative w-screen h-screen bg-primary text-white overflow-hidden">
      {/* Gradients */}

      <div className="absolute opacity-70 circleGradient-peach object-cover w-[110%] h-3/5 top-[-100px] left-[-260px] z-0 "></div>
      <div className="absolute opacity-70 circleGradient-peach object-cover w-[110%] h-3/5 top-[-100px] right-[-260px] z-0 "></div>
      <div className="absolute opacity-70 circleGradient-peach object-cover w-[110%] h-3/5 bottom-[-100px] left-[-260px] z-[0] "></div>
      <div className="absolute opacity-70 circleGradient-peach object-cover w-[110%] h-3/5 bottom-[-100px] right-[-260px] z-[0] "></div>

      {/*  */}

      {/* Top head div containing logo and sidemenu */}
      <div className="w-full justify-between flex p-4 z-[2]">
        <div className="w-2/6">
          <img src={logo} />
        </div>
        <div>
          <SideMenu />
        </div>
      </div>
      {/* Top End */}

      {/* Center Text */}
      <div className="text-4xl text-center p-4 m-2 font-semibold leading-normal">
        <h1>
          How Do You
          <br /> Want Your
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-[cyan] to-[#0bb9b9]">
            <br />
            Fabric?
          </span>
        </h1>
      </div>
      {/* Center Text end */}

      {/* Cards of Choice */}
      <div className="relative z-[2]">
        <CardM
          icon={truck}
          head="Pick My Fabric"
          tail="Read the terms and conditions a bout  picking up fabric"
        />
        <CardM
          icon={fabric}
          head="Choose Online"
          tail="Read the terms and conditions a bout  picking up fabric"
        />
      </div>
      {/* Cards End */}

      <div className="text-center mt-16 items-center text-lg">
        <p>
          <u className="font-medium">T&C</u> For Picking Up Fabric
          <br />
          <u className="font-medium">T&C</u> For Choosing Online
          <br />
        </p>
      </div>
    </div>
  );
};

export default FabricModel;
