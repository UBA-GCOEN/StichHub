import React, { useEffect, useState } from "react";
import axios from "../axios";
import LeftView from "../components/TailorDashboard/main/LeftView";
import TopDisplays from "../components/TailorDashboard/main/TopDisplays";
import MainDisplay from "../components/TailorDashboard/main/MainDisplay";
import TopProfile from "../components/TailorDashboard/mobile/Main/TopProfile";
import TopMobileDisplays from "../components/TailorDashboard/mobile/Main/TopMobileDisplays";
import MainMobileDisplay from "../components/TailorDashboard/mobile/Main/MainMobileDisplay";
import NavBar from "../components/TailorDashboard/main/NavBar";
import FooterNavigation from "../components/TailorDashboard/mobile/FooterNavigation";
import OngoingOrders from "../components/TailorDashboard/ongoing/OngoingOrders";
import OngoingOrdersOpen from "../components/TailorDashboard/ongoing/OngoingOrdersOpen";
import Profiles from "../components/TailorDashboard/Profile";
import NewOrder from "../components/TailorDashboard/mobile/Main/NewOrders";
import { Player } from "@lottiefiles/react-lottie-player";

const elements = [<Dashboard />, <Profile />, <Ongoing />];
const mobile_elements = [<MDashboard />, <Profile />, <MOngoing />];

import Graphs from "../components/TailorDashboard/Graphs";
import MobileOngoingOrders from "../components/TailorDashboard/mobile/Ongoing/MobileOngoingOrders";

const TailorDashboard = () => {
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [tailorDetails, setTailorDetails] = useState(null);


  // GET /tailors/specific to get the tailor details
  const fetchData = async () => {
    setIsLoading(true);
    try{
      const res = await axios.get("/tailors/specific");
      setTailorDetails(res.data);
      setIsLoading(false);

    } catch(error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  

  const handleNavigationLinkClick = (index) => {
    setCurrentElementIndex(index);
  };

  return (
    <>

    {/* Loader until the response is achieved from /tailors/specific */}
    {isLoading?

      <div className="relative">
      <div className="absolute z-[100] left-[-10vw] lg:left-[30vw] top-[10vh]">
        <Player
          src="https://assets8.lottiefiles.com/packages/lf20_prjwp0b2.json"
          background="transparent"
          speed="1"
          style={{ height: "500px", width: "500px" }}
          loop
          autoplay
        />
      </div>
      </div>
      :      

    <div className="w-[100vw] bg-primary">
      <div className="overflow-x-hidden hidden lg:block">
        <NavBar />
        <div className="grid grid-rows-3  grid-flow-col grid-cols-[13%] text-5xl text-center select-none bg-primary - w-[100vw]  h-[92.7vh]">
          <LeftView
            handleNavigationLinkClick={handleNavigationLinkClick}
            tailorDetails={tailorDetails}
          ></LeftView>
          {elements[currentElementIndex]}
          {/* <OngoingOrdersOpen></OngoingOrdersOpen> */}
        </div>
      </div>
      <div className="lg:hidden">
        <NavBar />
        <div className="grid text-center select-none bg-primary justify-items-start text-5xl w-[100vw]  h-full">
     
          <TopProfile className="place-self-center" tailorDetails={tailorDetails}></TopProfile>
          {mobile_elements[currentElementIndex]}
          <FooterNavigation
            handleNavigationLinkClick={handleNavigationLinkClick}
          ></FooterNavigation>
        </div>
      </div>
    </div>

}

    </>
  );
};

//navigation functions
function Dashboard() {
  return (
    <div>
      <TopDisplays />
      <MainDisplay />
    </div>
  );
}

function Profile() {
  return <Profiles />;
}

function Ongoing() {
  return <OngoingOrders />;
}

function MDashboard() {
  return (
    <div>
      <TopMobileDisplays />
      <NewOrder></NewOrder>
      <MainMobileDisplay></MainMobileDisplay>
    </div>
  );
}

function MOngoing() {
  return <MobileOngoingOrders />;
}

export default TailorDashboard;
