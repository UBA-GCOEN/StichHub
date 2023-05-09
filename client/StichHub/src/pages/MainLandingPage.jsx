import { useState } from "react";
import {
  NavBar,
  About,
  ContactUs,
  Home,
  OurServices,
  HowItWorks,
  Footer,
} from "../components/MainLandingPage";
import { LandingPageDemo } from "../contexts/LandingPageDemo";

const MainLandingPage = () => {
  return (
    <div className="text-center text-white overflow-hidden text-3xl bg-primary">
      <NavBar />
      <LandingPageDemo>
        <Home />
      </LandingPageDemo>
      <OurServices />
      <HowItWorks />
      <About />
      <ContactUs />
      <p className="text-sm">@ Stichhub 2023</p>
    </div>
  );
};

export default MainLandingPage;
