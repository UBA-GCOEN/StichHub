import React from "react";
import { ControlsMenu, ClothModel, Navbar } from "../components/Configurator";
import {
  ConfiguratorProvider,
  useCCustomization,
} from "../contexts/Configurator";

const ThreeDConfigurator = () => {
  return (
    <ConfiguratorProvider>
      <div className={`h-[100vh] overflow-hidden`}>
        <Navbar />
        <ClothModel />
        <ControlsMenu />
      </div>
    </ConfiguratorProvider>
  );
};

export default ThreeDConfigurator;
