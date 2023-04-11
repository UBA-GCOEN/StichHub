import React from "react";
import LeftView from "../components/TailorDashboard/LeftView";
import TopDisplays from "../components/TailorDashboard/TopDisplays";
import gradient from "../assets/TailorDashboard/gradient_blue.png";
import MainDisplay from "../components/TailorDashboard/MainDisplay";

import NavBar from "../components/TailorDashboard/NaBar";

const TailorDashboard = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="grid grid-rows-3  grid-flow-col grid-cols-[13%] text-5xl text-center select-none bg-primary - flex justify-items-start text-5xl w-[100vw]  h-[92.7vh] text-center bg-primary">
        <LeftView></LeftView>
        <TopDisplays></TopDisplays>

        <MainDisplay></MainDisplay>
      </div>
    </div>
  );
};

export default TailorDashboard;
