import { createContext, useContext, useState } from "react";

const HomeContext = createContext({});

const orderData = {
  tailorId: "",
  category: "",
  clothDetails: {
    sleeve: "",
    collar: "",
    backDetails: "",
    cuffs: "",
    color: "",
    fabric: "",
  },
  measurements: {
    height: "",
    weight: "",
    shoeSize: "",
    age: "",
    gender: "",
    neckSize: "",
    chestSize: "",
    shoulderSize: "",
    waistSize: "",
    armLength: "",
    inseam: "",
  },
  fabricMode: "",
};



export const HomeProvider = (props) => {
  const [orderDetails, setOrderDetails] = useState(orderData);
const [tailorDetails , setTailorDetails] =useState({
  status : "",
  message : "",
  tailorUser : {}
});
  return (
    <HomeContext.Provider
      value={{
        orderDetails,
        setOrderDetails,
        tailorDetails, 
        setTailorDetails
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export const useHCustomization = () => {
  const context = useContext(HomeContext);
  return context;
};
