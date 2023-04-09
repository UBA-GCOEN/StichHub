import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCustomization } from "../../../contexts/LandingPageDemo";

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./3D-Model/FinalModel.gltf");
  const { actions, names } = useAnimations(animations, group);
  const { demoButton } = useCustomization();

  //Model Animation
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play()
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Light"
          position={[4.08, 5.9, -1.01]}
          rotation={[1.89, 0.88, -2.05]}
        />
        <group
          name="Camera"
          position={[7.36, 4.96, 6.93]}
          rotation={[1.24, 0.33, -0.76]}
        />
        <group
          name="Light001"
          position={[4.08, 5.9, -1.01]}
          rotation={[1.89, 0.88, -2.05]}
        />
        <group
          name="Camera001"
          position={[7.36, 4.96, 6.93]}
          rotation={[1.24, 0.33, -0.76]}
        />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="ObjNurb" />
          <group name="ObjNurb001" />
          <group name="ObjNurb002" />
          <group name="ObjNurb003" />
          <group name="ObjNurb004" />
          <group name="ObjNurb005" />
          <group name="ObjNurb006" />
          <group name="ObjNurb007" />
          <group name="ObjNurb008" />
          <group name="ObjNurb009" />
          <group name="ObjNurb010" />
          <group name="ObjNurb011" />
          <group name="ObjNurb012" />
          <group name="ObjNurb013" />
          <group name="ObjNurb014" />
          <group name="ObjNurb015" />
          <group name="ObjNurb016" />
          <group name="ObjNurb017" />
          <group name="ObjNurb018" />
          <group name="ObjNurb019" />
          <group name="ObjNurb020" />
          <group name="ObjNurb021" />
          <group name="ObjNurb022" />
          <group name="ObjNurb023" />
          <group name="ObjNurb024" />
          <group name="ObjNurb025" />
          <group name="ObjNurb026" />
          <group name="ObjNurb027" />
          <group name="ObjNurb028" />
          <group name="ObjNurb029" />
          <group name="ObjNurb030" />
          <group name="ObjNurb031" />
          <group name="ObjNurb032" />
          <group name="ObjNurb033" />
          <group name="ObjNurb034" />
          <group name="ObjNurb035" />
          <group name="ObjNurb036" />
          <group name="ObjNurb037" />
          <group name="ObjNurb038" />
          <group name="ObjNurb039" />
          <group name="ObjNurb040" />
          <group name="ObjNurb041" />
          <group name="ObjNurb042" />
          <group name="ObjNurb043" />
          <group name="ObjNurb044" />
          <group name="ObjNurb045" />
          <group name="ObjNurb046" />
          <group name="ObjNurb047" />
          <group name="ObjNurb048" />
          <group name="ObjNurb049" />
          <group name="ObjNurb050" />
          <group name="ObjNurb051" />
          <group name="ObjNurb052" />
          <group name="ObjNurb053" />
          <group name="ObjNurb054" />
          <group name="ObjNurb055" />
          <group name="ObjNurb056" />
          <group name="model">
            {/* Blue Shirt */}
            <skinnedMesh
              name="model_1"
              geometry={nodes.model_1.geometry}
              material={materials.Cotton_Oxford_FRONT_6935056}
              skeleton={nodes.model_1.skeleton}
              visible={demoButton.text === 'With Sleeve' || demoButton.text === 'Sleeve-Less'}
            />
            {/* Collar Button */}
            <skinnedMesh
              name="model_2"
              geometry={nodes.model_2.geometry}
              material={materials.Material257031}
              skeleton={nodes.model_2.skeleton}
              visible={demoButton.text === 'With Sleeve' || demoButton.text === 'Sleeve-Less'}
            />
            {/* Shirt Buttons */}
            <skinnedMesh
              name="model_3"
              geometry={nodes.model_3.geometry}
              material={materials.Material166507}
              skeleton={nodes.model_3.skeleton}
              visible={demoButton.text === 'With Sleeve' || demoButton.text === 'Sleeve-Less'}
            />
            {/* Sleeve placket */}
            <skinnedMesh
              name="model_4"
              geometry={nodes.model_4.geometry}
              material={materials.Sleeve_Placket_FRONT_5033252}
              skeleton={nodes.model_4.skeleton}
              visible={demoButton.text === 'With Sleeve'}
            />

            {/* Full Sleeve */}
            <skinnedMesh
              name="model_5"
              geometry={nodes.model_5.geometry}
              material={materials.Rib_1X1_486gsm_FRONT_6935251}
              skeleton={nodes.model_5.skeleton}
              visible={demoButton.text === 'With Sleeve'}
            />
            <skinnedMesh
              name="model_6"
              geometry={nodes.model_6.geometry}
              material={materials.Material176058}
              skeleton={nodes.model_6.skeleton}
              visible={demoButton.text === 'With Sleeve' || demoButton.text === 'Sleeve-Less'}
            />
            {/* Sleeve button packets */}
            <skinnedMesh
              name="model_7"
              geometry={nodes.model_7.geometry}
              material={materials.Sleeve_Placket_FRONT_5797801}
              skeleton={nodes.model_7.skeleton}
              visible={demoButton.text === 'With Sleeve'}
            />
            <skinnedMesh
              name="model_8"
              geometry={nodes.model_8.geometry}
              material={materials.Material176075}
              skeleton={nodes.model_8.skeleton}
              visible={demoButton.text === 'With Sleeve' || demoButton.text === 'Sleeve-Less'}
            />

            {/* Black pants */}
            <skinnedMesh
              name="model_9"
              geometry={nodes.model_9.geometry}
              material={materials.Wool_Melton_FRONT_6934813}
              skeleton={nodes.model_9.skeleton}
              visible={demoButton.text === 'With Sleeve' || demoButton.text === 'Sleeve-Less'}
            />
            <skinnedMesh
              name="model_10"
              geometry={nodes.model_10.geometry}
              material={materials.Material165437}
              skeleton={nodes.model_10.skeleton}
              visible={demoButton.text === 'With Sleeve' || demoButton.text === 'Sleeve-Less'}
            />
            <skinnedMesh
              name="model_11"
              geometry={nodes.model_11.geometry}
              material={materials.Material165452}
              skeleton={nodes.model_11.skeleton}
              visible={demoButton.text === 'With Sleeve'}
            />
            {/* Black Dress Below */}
            <skinnedMesh
              name="model_12"
              geometry={nodes.model_12.geometry}
              material={materials.Collar_Stand_FRONT_8353938}
              skeleton={nodes.model_12.skeleton}
              visible={demoButton.text === 'Modern Dress'}
            />

            <skinnedMesh
              name="model_13"
              geometry={nodes.model_13.geometry}
              material={materials.Body_FRONT_8353943}
              skeleton={nodes.model_13.skeleton}
              visible={demoButton.text === 'Modern Dress'}
            />

            {/* Body parts below */}
            <skinnedMesh
              name="model_14"
              geometry={nodes.model_14.geometry}
              material={materials.dummySG1SG1}
              skeleton={nodes.model_14.skeleton}
            />
            <skinnedMesh
              name="model_15"
              geometry={nodes.model_15.geometry}
              material={materials.W_Shoes_skinSG1SG1SG1}
              skeleton={nodes.model_15.skeleton}
            />
            <skinnedMesh
              name="model_16"
              geometry={nodes.model_16.geometry}
              material={materials.HEELSG1SG1}
              skeleton={nodes.model_16.skeleton}
            />
        
            <skinnedMesh
              name="model_17"
              geometry={nodes.model_17.geometry}
              material={materials.Feifei_hair_opencollada_hair2}
              skeleton={nodes.model_17.skeleton}
            />
            <skinnedMesh
              name="model_18"
              geometry={nodes.model_18.geometry}
              material={materials["Mara:face2"]}
              skeleton={nodes.model_18.skeleton}
            />
            <skinnedMesh
              name="model_19"
              geometry={nodes.model_19.geometry}
              material={materials["Mara:body3"]}
              skeleton={nodes.model_19.skeleton}
            />
            <skinnedMesh
              name="model_20"
              geometry={nodes.model_20.geometry}
              material={materials["Mara:arm2"]}
              skeleton={nodes.model_20.skeleton}
            />
            <skinnedMesh
              name="model_21"
              geometry={nodes.model_21.geometry}
              material={materials["Mara:leg2"]}
              skeleton={nodes.model_21.skeleton}
            />
            <skinnedMesh
              name="model_22"
              geometry={nodes.model_22.geometry}
              material={materials["Mara:eye2"]}
              skeleton={nodes.model_22.skeleton}
            />
            <skinnedMesh
              name="model_23"
              geometry={nodes.model_23.geometry}
              material={
                materials[
                  "Mara:skin_14:skin_13:skin_11:skin_10:pose:pose:eyelash1"
                ]
              }
              skeleton={nodes.model_23.skeleton}
            />
            <skinnedMesh
              name="model_24"
              geometry={nodes.model_24.geometry}
              material={materials["Mara:tooth2"]}
              skeleton={nodes.model_24.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export default Model

useGLTF.preload("./3D-Model/FinalModel.gltf");