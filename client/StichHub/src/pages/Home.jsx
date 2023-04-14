import React from "react";
import { Navbar, FilterSection, TailorList } from "../components/Home/index.js";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <FilterSection />
      <TailorList />
    </div>
  );
};

export default Home;
