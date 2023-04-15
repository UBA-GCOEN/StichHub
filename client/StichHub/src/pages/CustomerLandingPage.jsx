import { React, useState } from "react";
import Navbardark from "../components/Navbardark.jsx";
import PageContent from "../components/CustomerLandingPage/PageContent";
import Worried from "../components/CustomerLandingPage/Worried";
import Features from "../components/CustomerLandingPage/Features.jsx";
import GetList from "../components/CustomerLandingPage/GetList.jsx";
import Configurator from "../components/CustomerLandingPage/Configurator.jsx";
import { FaListUl } from "react-icons/fa";
import logo from "../assets/logo/Long - Logo Transparent (White).png";
import PageContentM from "../components/CustomerLandingPage/PageContentM.jsx";
import FeaturesM from "../components/CustomerLandingPage/FeaturesM.jsx";
import GetListM from "../components/CustomerLandingPage/GetListM.jsx";
import WorriedM from "../components/CustomerLandingPage/WorriedM.jsx";
// import { Highlight } from "../assets/CustomerLandingPage/Icons";

function CustomerLandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  // check screen size and set state variable
  window.addEventListener("resize", () => {
    const isMobileView = window.innerWidth <= 840;
    if (isMobileView !== isMobile) setIsMobile(isMobileView);
  });

  // render mobile or desktop component based on isMobile state
  return (
    <div>{isMobile ? <CustomerLandingPageM /> : <CustomerLandingPageD />}</div>
  );
}

// DesktopView
const CustomerLandingPageD = () => {
  return (
    <div className="relative bg-primary p-2 w-screen h-screen overflow-x-hidden">
      {/* NAV START */}
      <Navbardark />
      {/* NAV END */}

      {/* Central Content */}
      <PageContent />

      {/* Gradient */}
      <div className="absolute opacity-70 circleGradient-peach object-cover w-[90%] h-3/5 -top-28 -right-[40rem] z-0 "></div>

      {/* Get altering stores list */}
      <GetList />

      {/* 3D Configurator */}
      <Configurator />

      {/* For features  */}
      <Features />
      {/* ENd features */}

      {/* Section 2 for models in spline*/}
      <div className="">
        <Worried />
      </div>
    </div>
  );
};

// Mobile View
const CustomerLandingPageM = () => {
  return (
    <div className="bg-primary p-2 w-screen h-screen overflow-x-hidden">
      {/* Top head div containing logo and sidemenu */}
      <div className="w-full justify-between flex p-4 z-[2]">
        <div className="w-3/6">
          <img src={logo} />
        </div>
        <div>
          <FaListUl color="cyan" />
        </div>
      </div>
      {/* Top Over */}

      {/* Model Part */}
      <PageContentM />
      {/* Model Part End*/}

      {/* Altering List */}
      <GetListM />
      {/* Altering List End */}

      {/* Features */}
      <FeaturesM />
      {/* Features End*/}

      {/* Measurement Ways */}
      <WorriedM />
      {/* Measurement WaysEnd */}
    </div>
  );
};

export default CustomerLandingPage;
