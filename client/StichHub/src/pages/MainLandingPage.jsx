import React from "react";
import {
  About,
  ContactUs,
  Home,
  NavBar,
  OurServices,
  HowItWorks,
  Footer,
} from "../components/MainLandingPage";

const MainLandingPage = () => {
  return (
    <div className="text-center text-3xl text-white overflow-hidden bg-primary">
      <Home />
      <OurServices />
      <HowItWorks />
      <About />
      <ContactUs />
      Footer
    </div>
  );
};

export default MainLandingPage;
