import { PresentationControls, OrbitControls } from "@react-three/drei";
import ShirtModel from "../../Configurator/ClothModel/ShirtModel";
import { useCCustomization } from "../../../contexts/Configurator";
import { shirtPart } from "../../../contants/configurator";


const ModelEnvironment = () => {
  const { enabled, shirtPart, part } = useCCustomization();
  return (
    <>
      <PresentationControls
        enabled={!shirtPart[part].zoom}
        polar={[0.4, Math.PI / 4]}
        speed={2}
        zoom={1}
        snap={!enabled}
      >
        {/* <OrbitControls enableRotate={false} enablePan={false}/> */}
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        //-1.26
        <group position={[shirtPart[part].pos[0], shirtPart[part].pos[1], shirtPart[part].pos[2]]} rotation={[shirtPart[part].rot[0],shirtPart[part].rot[1],shirtPart[part].rot[2]]}
        >
          <ShirtModel />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelEnvironment;
