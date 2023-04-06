import { createContext, useContext, useState } from "react";
import { fabrics, shirtPart, clothColor } from "../contants/configurator";

const ConfiguratorContext = createContext({});

export const ConfiguratorProvider = (props) => {
  const [enabled, setEnabled] = useState(false);
  const [resetzoom, setZoom] = useState(true);
  const [selected, setSelected] = useState(fabrics[0]);
  const [selectedColor, setSelectedColor] = useState(clothColor[0]);
  const [part, setPart] = useState(0);
  const [sleeveType, setSleeveType] = useState(shirtPart[0].types[0]);
  const [collarType, setCollarType] = useState(shirtPart[1].types[0]);
  const [backType, setBackType] = useState(shirtPart[2].types[0]);
  const [cuffType, setCuffType] = useState(shirtPart[3].types[0]);
  const [env, setEnv] = useState(false);

  const nextPart = () => {
    if (part + 1 === shirtPart.length - 1 && sleeveType.typeName === "Sleeve 1")
      setPart(part + 1);

    if (part + 1 < shirtPart.length - 1) setPart(part + 1);
  };

  const prevPart = () => {
    if (part - 1 >= 0) setPart(part - 1);
  };

  const resetZoom = () => {
    setZoom(!resetzoom);
    shirtPart[part].zoom = resetzoom;
    if (!resetzoom && part === 1) {
      shirtPart[part].pos = [0, -1.26, 0];
    } else if (!resetzoom && part === 3) {
      shirtPart[part].pos = [0, -1.26, 0];
      shirtPart[part].rot = [0, 3.1, 0];
    } else if (resetzoom && part == 1) {
      shirtPart[part].pos = [0, -0.17, 3.5];
    } else if (resetzoom && part == 3) {
      shirtPart[part].pos = [0.25, 0.25, 3];
      shirtPart[part].rot = [0, 3.6, 0];
    }
  };

  return (
    <ConfiguratorContext.Provider
      value={{
        enabled,
        setEnabled,
        resetzoom,
        setZoom,
        selected,
        setSelected,
        fabrics,
        part,
        nextPart,
        prevPart,
        setPart,
        shirtPart,
        resetZoom,
        clothColor,
        selectedColor,
        setSelectedColor,
        sleeveType,
        collarType,
        backType,
        cuffType,
        setSleeveType,
        setBackType,
        setCollarType,
        setCuffType,
        env,
        setEnv,
      }}
    >
      {props.children}
    </ConfiguratorContext.Provider>
  );
};

export const useCCustomization = () => {
  const context = useContext(ConfiguratorContext);
  return context;
};
