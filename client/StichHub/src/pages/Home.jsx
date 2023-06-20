import {React, useState} from "react";
import { Navbar, FilterSection, TailorList, Features, CustomerOrder } from "../components/Home/index.js";

const Home = () => {
  const [filter, setFilter] = useState({category: false, price: [], rating:[]});
  const handleChange = (e)=>{
    const {name, value} = e.target;
    if(name !== "category"){
      if(e.target.checked){
        setFilter((prev)=>{
          return {
            ...prev,
            [name]: [...filter[name], value] 
          }
        })
      }else{
        setFilter((prev)=>{
          return {
            ...prev,
            [name]: filter[name].filter((item)=>item!==value)
          }
        })
      }
    }else{
      setFilter((prev)=>{
        return {...prev, category: value}
      })
    }
  }

  return (
    <div className="">
      <Navbar />
      <Features />[]
      <FilterSection handleChange={handleChange} />
      <TailorList filters={filter} />
    </div>
  );
};

export default Home;
