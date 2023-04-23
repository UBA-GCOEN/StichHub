import React from "react";
import { Navbar, FilterSection, TailorList, Features, CustomerOrder } from "../components/Home/index.js";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Features />
      <FilterSection />
      <TailorList />
    </div>
  );
};

export default Home;
