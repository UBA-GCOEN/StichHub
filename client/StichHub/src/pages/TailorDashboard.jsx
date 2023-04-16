import React from "react";
import LeftView from "../components/TailorDashboard/main/LeftView";
import TopDisplays from "../components/TailorDashboard/main/TopDisplays";
import gradient from "../assets/TailorDashboard/gradient_blue.png";
import MainDisplay from "../components/TailorDashboard/main/MainDisplay";
import TopProfile from "../components/TailorDashboard/mobile/Main/TopProfile";
import TopMobileDisplays from "../components/TailorDashboard/mobile/Main/TopMobileDisplays";
import MainMobileDisplay from "../components/TailorDashboard/mobile/Main/MainMobileDisplay";
import NavBar from "../components/TailorDashboard/main/NavBar";
import FooterNavigation from "../components/TailorDashboard/mobile/FooterNavigation";
import OngoingOrders from "../components/TailorDashboard/ongoing/OngoingOrders";
import OngoingOrdersOpen from "../components/TailorDashboard/ongoing/OngoingOrdersOpen";

import Graphs from "../components/TailorDashboard/Graphs";

const TailorDashboard = () => {
  return (
    <div className="w-[100vw]">
      <div className="overflow-x-hidden hidden lg:block">
        <NavBar />
        <div className="grid grid-rows-3  grid-flow-col grid-cols-[13%] text-5xl text-center select-none bg-primary - w-[100vw]  h-[92.7vh]">
          <LeftView></LeftView>

          {/* <TopDisplays></TopDisplays>
          <MainDisplay></MainDisplay>
          <OngoingOrders></OngoingOrders> */}
          <OngoingOrdersOpen></OngoingOrdersOpen>
        </div>
      </div>
      <div className="lg:hidden">
        <NavBar />
        <div className="grid text-center select-none bg-primary justify-items-start text-5xl w-[100vw]  h-full">
          {/* <LeftView></LeftView>
        <MainDisplay></MainDisplay> */}
          <TopProfile className="place-self-center"></TopProfile>
          <TopMobileDisplays />
          <MainMobileDisplay></MainMobileDisplay>
          <FooterNavigation></FooterNavigation>
        </div>
      </div>
    </div>
  );
};

export default TailorDashboard;
