import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import ModelEnvironment from "./ModelEnvironment";
import { Switch } from "@headlessui/react";
import { zoom, View } from "../../../assets/3dConfigurator/configurator-icons";
import { useCCustomization } from "../../../contexts/Configurator";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { XR, ARButton, Controllers } from "@react-three/xr";

const ClothModel = () => {
  const { enabled, setEnabled, shirtPart, part, resetZoom, env, setEnv } =
    useCCustomization();

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data.
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0 });
  });

  return (
    <div
      className={`relative h-[55vh] text-white ${
        env === true ? "bg-transparent" : "bg-primary"
      }`}
    >
      <div onClick={() => setEnv(!env)} className="relative top-[52vh] left-4">
        <ARButton />
      </div>
      <Canvas
        {...bind()}
        style={{ x, y, touchAction: "none" }}
        className="relative z-[5] outline-none"
        camera={{ zoom: 6.2 }}
      >
        <Html fullscreen className="mx-7">
          <div className="flex justify-between">
            <h1 className="z-[-2] text-left text-xl font-semibold relative select-none">
              Men's Shirt
            </h1>
            <div>
              <div
                id="freeView"
                className={`relative ${
                  shirtPart[part].zoom ? "hidden" : "flex flex-col content-end"
                }  mr-[51px] mt-2`}
              >
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-indigo-500" : "bg-gray-500"
                  } relative inline-flex h-6 w-11 items-center rounded-full ml-1`}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
                <span className="text text-xs pt-1 select-none">Free View</span>
              </div>
              <div
                id="resetZoom"
                className={`${part === 1 || part === 3 ? "" : "hidden"}
                mr-[45px]`}
              >
                <div className="flex justify-center">
                  {shirtPart[part].zoom ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 bg-white  p-[5px] rounded-full cursor-pointer hover:bg-gray-200 select-none text-black"
                      onClick={() => resetZoom()}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 bg-white p-[5px] rounded-full cursor-pointer hover:bg-gray-200 select-none text-black mt-3"
                      onClick={() => resetZoom()}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex justify-center">
                  <span className="text text-xs pt-1 select-none">
                    Zoom {shirtPart[part].zoom ? "Out" : "In"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="absolute bottom-4 mr-7">
              {/* <div className="flex justify-center">
                <div className="mb-1 flex bg-white text-black w-fit p-2 rounded-full">
                  <img src={View} className="mr-3 ml-1 w-[15px]" />
                  <span className="text-sm font-semibold cursor-pointer">
                    See in your room
                  </span>
                </div>
              </div> */}
              <span className="text-sm">{`${
                shirtPart[part].zoom
                  ? "Reset zoom for 360° view"
                  : "Drag the Model for 360° view"
              }`}</span>
            </div>
          </div>
        </Html>
        <XR referenceSpace="local">
          <ModelEnvironment />
          <Controllers />
        </XR>
      </Canvas>

      {/* BG-Gradients */}
      <div
        className={`absolute w-[250px] h-[40vh] top-[160px] left-[76px] modelGradient z-0 ${
          env === true ? "hidden" : ""
        }`}
      ></div>
      <div
        className={`absolute circleGradient-peach w-[500px] h-[400px] top-[-100px] left-[-260px] z-0 ${
          env === true ? "hidden" : ""
        }`}
      ></div>
      <div
        className={`absolute circleGradient-blue w-[200px] h-[200px] top-[400px] right-[-50px] z-0 blur-xl ${
          env === true ? "hidden" : ""
        }`}
      ></div>
    </div>
  );
};

export default ClothModel;
