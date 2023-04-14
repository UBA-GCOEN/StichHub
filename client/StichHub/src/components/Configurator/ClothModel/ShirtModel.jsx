import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useCCustomization } from "../../../contexts/Configurator";
import * as THREE from "three";
import {
  cotton_normal,
  cotton_rough,
  cotton_ao,
  silk_ao,
  silk_normal,
  silk_rough,
  wool_ao,
  wool_normal,
  wool_rough,
} from "../../../../src/assets/textures";


function ShirtModel(props) {
  const { nodes, materials } = useGLTF("../../../../src/assets/3D-Model/ShirtModel-transformed.glb");
  const { sleeveType, collarType, backType, cuffType, selectedColor, selected } =
    useCCustomization();

  const cottonTextureProps = useTexture({
    normalMap: cotton_normal,
    roughnessMap: cotton_rough,
    aoMap: cotton_ao,
  })

  const woolTextureProps = useTexture({
    normalMap: wool_normal,
    roughnessMap: wool_rough,
    aoMap: wool_ao,
  })

  const silkTextureProps = useTexture({ 
    normalMap: silk_normal,
    roughnessMap: silk_rough,
    aoMap: silk_ao,
  })

  var texture;
  if(selected.name === 'Cotton')
    texture = cottonTextureProps;

  else  if(selected.name === 'Wool')
    texture = woolTextureProps;

  else  if(selected.name === 'Silk')
    texture = silkTextureProps;

  return (
    <group {...props} dispose={null}>
      {/* sleeve3 */}
      <mesh
        geometry={nodes.sleeve3.geometry}
        material={materials.Default_Fabric_FRONT_773700}
        rotation={[Math.PI / 2, 0, 0]}
        visible={sleeveType.typeName === "Sleeve 3"}
      >
        <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
      </mesh>
      {/* Hanger */}
      <group rotation={[Math.PI / 2, 0, 0]} visible={true}>
        <mesh
          geometry={nodes.hanger001.geometry}
          material={materials["Material9508.002"]}
        />
        <mesh
          geometry={nodes.hanger001_1.geometry}
          material={materials["Material9511.002"]}
        />
      </group>
      {/* back1 */}
      <mesh
        geometry={nodes.back1.geometry}
        material={materials.Body_B_FRONT_888561}
        rotation={[Math.PI / 2, 0, 0]}
        visible={backType.typeName === "Back 1"}
      >
        <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
      </mesh>
      {/* back2 */}
      <mesh
        geometry={nodes.back2.geometry}
        material={materials.Body_B_FRONT_1083905}
        rotation={[Math.PI / 2, 0, 0]}
        visible={backType.typeName === "Back 2"}
      >
        <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
      </mesh>
      {/* back3 */}
      <mesh
        geometry={nodes.back3.geometry}
        material={materials.Body_B_FRONT_1338441}
        rotation={[Math.PI / 2, 0, 0]}
        visible={backType.typeName === "Back 3"}
      >
        <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
      </mesh>
      {/* Front */}
      <group rotation={[Math.PI / 2, 0, 0]} visible={true}>
        {/* left-right cltohs */}
        <mesh
          geometry={nodes.Front_1.geometry}
          material={materials.Body_F_FRONT_1825062}
        >
          <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
        </mesh>
        {/* buttons-space-cloth */}
        <mesh
          geometry={nodes.Front_2.geometry}
          material={materials.Body_F_FRONT_1825062}
        >
          <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
        </mesh>
        {/* front-buttons */}
        <mesh
          geometry={nodes.Front_3.geometry}
          material={materials.Body_F_FRONT_1825062}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>
      {/* collar1 */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        visible={collarType.typeName === "Collar 1"}
      >
        {/* collar inner cloth */}
        <mesh
          geometry={nodes.collar1_1.geometry}
          material={materials.Collar_Stand_FRONT_3139592}
        >
          <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
        </mesh>
        {/* collar outer cloth */}
        <mesh
          geometry={nodes.collar1_2.geometry}
          material={materials.Collar_Stand_FRONT_3139592}
        >
          <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
        </mesh>
        {/* collar design buttons */}
        <mesh
          geometry={nodes.collar1_3.geometry}
          material={materials.Collar_Stand_FRONT_3139592}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
        {/* collar center button */}
        <mesh
          geometry={nodes.collar1_4.geometry}
          material={materials.Collar_Stand_FRONT_3139592}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>
      {/* collar2 */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        visible={collarType.typeName === "Collar 2"}
      >
        {/* collar design buttons */}
        <mesh
          geometry={nodes.collar2_1.geometry}
          material={materials.Collar_Stand_FRONT_3159643}
        >
          <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
        </mesh>
        {/* collar outer cloth */}
        <mesh
          geometry={nodes.collar2_2.geometry}
          material={materials.Collar_Stand_FRONT_3159643}
        >
          <meshStandardMaterial {...(texture)} color={selectedColor.hex} />
        </mesh>
        {/* collar center button */}
        <mesh
          geometry={nodes.collar2_3.geometry}
          material={materials.Collar_Stand_FRONT_3159643}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>
      {/* collar3 */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        visible={collarType.typeName === "Collar 3"}
      >
        {/* collar design buttons */}
        <mesh
          geometry={nodes.collar3_1.geometry}
          material={materials.Collar_FRONT_3169080}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* collar outer cloth */}
        <mesh
          geometry={nodes.collar3_2.geometry}
          material={materials.Collar_FRONT_3169080}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* collar center button */}
        <mesh
          geometry={nodes.collar3_3.geometry}
          material={materials.Collar_FRONT_3169080}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>
      {/* collar4 */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        visible={collarType.typeName === "Collar 4"}
      >
        {/* collar design buttons */}
        <mesh
          geometry={nodes.collar4_1.geometry}
          material={materials.Collar_Stand_FRONT_3180005}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* collar outer cloth */}
        <mesh
          geometry={nodes.collar4_2.geometry}
          material={materials.Collar_Stand_FRONT_3180005}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
      </group>
      {/* collar6 */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        visible={collarType.typeName === "Collar 5"}
      >
        {/* collar design buttons */}
        <mesh
          geometry={nodes.collar6.geometry}
          material={materials.Collar_FRONT_9756}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* collar outer cloth */}
        <mesh
          geometry={nodes.collar6_1.geometry}
          material={materials.Collar_FRONT_9756}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* collar center button */}
        <mesh
          geometry={nodes.collar6_2.geometry}
          material={materials.Collar_FRONT_9756}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>
      {/* cuff1 */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        visible={
          sleeveType.typeName === "Sleeve 1" && cuffType.typeName === "Cuff 1"
        }
      >
        {/* Cuff cloth */}
        <mesh
          geometry={nodes.cuff1_1.geometry}
          material={materials.Cuffs_FRONT_187223}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* Cuff button */}
        <mesh
          geometry={nodes.cuff1_2.geometry}
          material={materials.Cuffs_FRONT_187223}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>
      {/* cuff2 */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        visible={
          sleeveType.typeName === "Sleeve 1" && cuffType.typeName === "Cuff 2"
        }
      >
        {/* Cuff cloth */}
        <mesh
          geometry={nodes.cuff2_1.geometry}
          material={materials.Cuffs_FRONT_202265}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* Cuff button */}
        <mesh
          geometry={nodes.cuff2_2.geometry}
          material={materials.Cuffs_FRONT_202265}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>
      {/* cuff3 */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        visible={
          sleeveType.typeName === "Sleeve 1" && cuffType.typeName === "Cuff 3"
        }
      >
        {/* Cuff cloth */}
        <mesh
          geometry={nodes.cuff3_1.geometry}
          material={materials.Cuffs_FRONT_223565}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* Cuff button */}
        <mesh
          geometry={nodes.cuff3_2.geometry}
          material={materials.Cuffs_FRONT_223565}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>
      {/* sleeve1 */}
      <group
        rotation={[Math.PI / 2, 0, 0]}
        visible={sleeveType.typeName === "Sleeve 1"}
      >
        {/* sleeve button cloth */}
        <mesh
          geometry={nodes.sleeve1_1.geometry}
          material={materials.Sleeve_Placket_FRONT_592142}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* sleeve cloth */}
        <mesh
          geometry={nodes.sleeve1_2.geometry}
          material={materials.Sleeve_Placket_FRONT_592142}
        >
          <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
        </mesh>
        {/* sleeve button */}
        <mesh
          geometry={nodes.sleeve1_3.geometry}
          material={materials.Sleeve_Placket_FRONT_592142}
        >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>
      {/* sleeve2 */}
      <mesh
        geometry={nodes.sleeve2.geometry}
        material={materials.Sleeves_FRONT_742521}
        rotation={[Math.PI / 2, 0, 0]}
        visible={sleeveType.typeName === "Sleeve 2"}
      >
        <meshStandardMaterial {...(texture)}color={selectedColor.hex} />
      </mesh>
    </group>
  );
}

export default ShirtModel;

useGLTF.preload("../../../../src/assets/3D-Model/ShirtModel-transformed.glb");
