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
import GoToTop from "../components/GoToTop";

const MainLandingPage = () => {
  return (
    <div className="text-center text-white overflow-hidden text-3xl bg-primary">
      <GoToTop />
      <NavBar />
      <LandingPageDemo>
        <Home />
      </LandingPageDemo>
      <OurServices />
      <HowItWorks />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MainLandingPage;
