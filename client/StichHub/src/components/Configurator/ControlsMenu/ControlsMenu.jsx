import React from "react";
import BottomSection from "./BottomSection";
import OptionSection from "./OptionSection";
import TitleSection from "./TitleSection";

const ControlsMenu = () => {
  return (
    <div className="bg-primary">
      <div
        className="h-[40vh] bg-white rounded-t-3xl drop-shadow-2xl px-7 py-2"
        style={{ overflow: "auto" }}>
        <TitleSection />
        <OptionSection />
        <BottomSection />
      </div>
    </div>
  );
};

export default ControlsMenu;
