import React from "react";
import LeftView from "../components/TailorDashboard/LeftView";
import TopDisplays from "../components/TailorDashboard/TopDisplays";
import gradient from "../assets/TailorDashboard/gradient_blue.png";
import MainDisplay from "../components/TailorDashboard/MainDisplay";
import TopProfile from "../components/TailorDashboard/mobile/Main/TopProfile";
import TopMobileDisplays from "../components/TailorDashboard/mobile/Main/TopMobileDisplays";
import MainMobileDisplay from "../components/TailorDashboard/mobile/Main/MainMobileDisplay";

import NavBar from "../components/TailorDashboard/NaBar";
const TailorDashboard = () => {
  return (
    <div className="w-[100vw]">
      <div className="overflow-x-hidden hidden lg:block">
        <NavBar />
        <div className="grid grid-rows-3  grid-flow-col grid-cols-[13%] text-5xl text-center select-none bg-primary - w-[100vw]  h-[92.7vh]">
          <LeftView></LeftView>
          <TopDisplays></TopDisplays>
          <MainDisplay></MainDisplay>
        </div>
      </div>
      <div className="lg:hidden">
        <NavBar />
        <div className="grid text-center select-none bg-primary justify-items-start text-5xl w-[100vw]  h-full text-center bg-primary">
          {/* <LeftView></LeftView>
        <MainDisplay></MainDisplay> */}
          <TopProfile className="place-self-center"></TopProfile>
          <TopMobileDisplays />
          <MainMobileDisplay></MainMobileDisplay>
        </div>
      </div>
    </div>
  );
};

export default TailorDashboard;
