import { createContext, useContext, useState } from "react";

import { DemoShirtIcon, SleevlessShirt, ModernDress } from "../assets/MainLandingPage/Icons";

const demoButtons = [
  {
    img: DemoShirtIcon,
    text: "With Sleeve",
    style: "w-[50px] ml-4"
  },
  {
    img: SleevlessShirt,
    text: "Sleeve-Less",
    style: "w-[52px] ml-4"
  },
  {
    img: ModernDress,
    text: "Modern Dress",
    style: "w-[59px] ml-4"
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
