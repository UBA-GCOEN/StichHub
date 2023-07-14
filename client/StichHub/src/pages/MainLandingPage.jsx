import { useEffect, useState } from "react";
import {
  NavBar,
  About,
  ContactUs,
  Home,
  OurServices,
  HowItWorks,
  Footer,
  FooterHomePage
} from "../components/MainLandingPage";
import FAQ from "../components/MainLandingPage/FAQs/faq";
import Testimonial from "../components/Testimonial/Testimonial";
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
      <Testimonial />
      <FAQ/>
      <About />
      <ContactUs />
      <FooterHomePage />
      {/* <p className="text-sm">	&copy; Stichhub {new Date().getFullYear()}</p> */}
    </div>
  );
};

export default MainLandingPage;
