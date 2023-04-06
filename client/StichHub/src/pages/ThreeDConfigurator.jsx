import React from "react";
import { ControlsMenu, ClothModel, Navbar } from "../components/Configurator";
import { ConfiguratorProvider } from "../contexts/Configurator";

const ThreeDConfigurator = () => {
  return (
    <div className="bg-primary h-[100vh] overflow-hidden">
      <ConfiguratorProvider>
        <Navbar />
        <ClothModel />
        <ControlsMenu />
      </ConfiguratorProvider>
    </div>
  );
};

export default ThreeDConfigurator;
