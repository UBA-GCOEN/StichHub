import React from "react";
import {
  About,
  ContactUs,
  Home,
  OurServices,
  HowItWorks,
  Footer,
} from "../components/MainLandingPage";
import { LandingPageDemo } from "../contexts/LandingPageDemo";
import { Navbardark } from "../components";

const MainLandingPage = () => {
  return (
    <div className="text-center text-white overflow-hidden bg-primary">
      <Navbardark />
      <div className="text-3xl">
        <LandingPageDemo>
          <Home />
        </LandingPageDemo>
        <OurServices />
        <HowItWorks />
        <About />
        <ContactUs />
      </div>
      Footer
    </div>
  );
};

export default MainLandingPage;
