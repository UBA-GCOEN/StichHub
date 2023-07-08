import {React, useState} from "react";
import { Navbar, FilterSection, TailorList, Features, CustomerOrder } from "../components/Home/index.js";

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
    </div>
  );
};

export default Home;
