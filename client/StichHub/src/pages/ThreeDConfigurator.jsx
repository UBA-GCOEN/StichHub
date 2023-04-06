import React from "react";
import { ControlsMenu, ClothModel, Navbar } from "../components/Configurator";
import { ConfiguratorProvider, useCCustomization } from "../contexts/Configurator";

const ThreeDConfigurator = () => {
  const {env} = useCCustomization();

  return (
    <div className={`${(env === true) ? "bg-transparent" : "bg-primary"} h-[100vh] overflow-hidden`}>
      <ConfiguratorProvider>
        <Navbar />
        <ClothModel />
        <ControlsMenu />
      </ConfiguratorProvider>
    </div>
  );
};

export default ThreeDConfigurator;
