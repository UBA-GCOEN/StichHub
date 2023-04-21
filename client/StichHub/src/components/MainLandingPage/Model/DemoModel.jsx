import {
  OrbitControls,
  PresentationControls,
  Environment,
} from "@react-three/drei";
import Model from "./Model";
import ShirtModel from "../../Configurator/ClothModel/ShirtModel";

const DemoModel = (props) => {
  return (
    <>
      <PresentationControls
        polar={[0.4, Math.PI / 4]}
        global={true}
        speed={props.speed}
        zoom={1}
        snap
      >
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
        <group position={[0, -0.95, 0]} rotation={[0, 0, 0]}>
          <Model />
        </group>

      </PresentationControls>
    </>
  );
};

export default DemoModel;
