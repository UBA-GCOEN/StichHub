import {React, useState} from "react";
import { Navbar, FilterSection, TailorList, Features, CustomerOrder } from "../components/Home/index.js";
import Footer from "../components/MainLandingPage/Footer.jsx";

const Home = () => {
  const [filter, setFilter] = useState({category: false, price: false, rating:false});
  const clearFilter = () => {
    setFilter({category: false, price: false, rating:false})
  };
  const handleChange = (e)=>{
    const {name, value} = e.target;
      setFilter((prev)=>{
        return {...prev, [name]: value}
      }) 
  }

  return (
    <div className="">
      <Navbar />
      <Features />
      <FilterSection handleChange={handleChange} clearFilter={clearFilter}/>
      <TailorList filters={filter} />
      <Footer />
    </div>
  );
};

export default Home;
