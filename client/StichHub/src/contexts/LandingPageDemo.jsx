import { createContext, useContext, useState } from "react";

import { DemoShirtIcon, SleevlessShirt, ModernDress } from "../assets/MainLandingPage/Icons";

const demoButtons = [
  {
    img: DemoShirtIcon,
    text: "With Sleeve",
    style: "w-[35px] sm:w-[50px] sm:ml-4",
    alt: "Demo Shirt Icon"
  },
  {
    img: SleevlessShirt,
    text: "Sleeve-Less",
    style: "sm:w-[52px] w-[37px] sm:ml-4",
    alt: "Sleeveless Shirt Icon"
  },
  {
    img: ModernDress,
    text: "Modern Dress",
    style: "sm:w-[59px] w-[37px] sm:ml-4",
    alt: "Modern Dress Icon"
  },
];

const DemoContext = createContext({});

export const LandingPageDemo = (props) => {
  const [demoButton, setDemoButton] = useState(demoButtons[0]);

  return (
    <DemoContext.Provider
      value={{
        demoButtons,
        demoButton,
        setDemoButton,
      }}
    >
      {props.children}
    </DemoContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(DemoContext);
  return context;
};
