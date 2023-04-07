import React from "react";
import { ControlsMenu, ClothModel, Navbar } from "../components/Configurator";
import {
  ConfiguratorProvider,
  useCCustomization,
} from "../contexts/Configurator";

import { ARButton} from "@react-three/xr";

const ThreeDConfigurator = () => {
  const { env, setEnv } = useCCustomization();

  return (
    <ConfiguratorProvider>
      <div className={`${env === true ? 'bg-transparent' : 'bg-primary'} h-[100vh] overflow-hidden`}>
        <div onClick={() => setEnv(!env)}>
          <ARButton />
        </div>
        <Navbar />
        <ClothModel />
        <ControlsMenu />
      </div>
    </ConfiguratorProvider>
  );
};

export default ThreeDConfigurator;
