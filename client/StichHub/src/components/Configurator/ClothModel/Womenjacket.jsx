import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Womenjacket(props) {
  const { nodes, materials } = useGLTF('./3D-Model/Womenjacket-transformed.glb')
  return (
    <group {...props} dispose={null}>
      {/* back1 */}
      <mesh geometry={nodes.back1.geometry} material={materials.Body_B_FRONT_1464} rotation={[Math.PI / 2, 0, 0]} />
      {/* back1 */}
      <mesh geometry={nodes.back2.geometry} material={materials.Body_B_FRONT_46879} rotation={[Math.PI / 2, 0, 0]} />
      {/* back2 */}
      <mesh geometry={nodes.back3.geometry} material={materials.Body_B_FRONT_156492} rotation={[Math.PI / 2, 0, 0]} />
      {/* front 1 */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.front1_1.geometry} material={materials.Body_F_FRONT_350439} />
        <mesh geometry={nodes.front1_2.geometry} material={materials.Body_F_FRONT_350439} />
        <mesh geometry={nodes.front1_3.geometry} material={materials.Body_F_FRONT_350439} />
      </group>
      {/* front 2 */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.front2_1.geometry} material={materials.Body_F_FRONT_495990} />
        <mesh geometry={nodes.front2_2.geometry} material={materials.Body_F_FRONT_495990} />
        <mesh geometry={nodes.front2_3.geometry} material={materials.Body_F_FRONT_495990} />
      </group>
      {/* front 3 */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.front3_1.geometry} material={materials.Body_F_FRONT_691768} />
        <mesh geometry={nodes.front3_2.geometry} material={materials.Body_F_FRONT_691768} />
      </group>
      {/* front 4 */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.front4_1.geometry} material={materials.Body_F_FRONT_876799} />
        <mesh geometry={nodes.front4_2.geometry} material={materials.Body_F_FRONT_876799} />
        <mesh geometry={nodes.front4_3.geometry} material={materials.Body_F_FRONT_876799} />
      </group>
      {/* front 5 */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.front5_1.geometry} material={materials.Body_F_StandCollar_FRONT_1025601} />
        <mesh geometry={nodes.front5_2.geometry} material={materials.Body_F_StandCollar_FRONT_1025601} />
        <mesh geometry={nodes.front5_3.geometry} material={materials.Body_F_StandCollar_FRONT_1025601} />
      </group>
      {/* front 6 */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.front6_1.geometry} material={materials.Body_F_FRONT_1155364} />
        <mesh geometry={nodes.front6_2.geometry} material={materials.Body_F_FRONT_1155364} />
      </group>
      {/* Sleeve 1 */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.sleevefull1_1.geometry} material={materials.Sleeves_FRONT_1731051} />
        <mesh geometry={nodes.sleevefull1_2.geometry} material={materials.Sleeves_FRONT_1731051} />
        <mesh geometry={nodes.sleevefull1_3.geometry} material={materials.Sleeves_FRONT_1731051} />
      </group>
      {/* Sleeve 2 */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.sleevefull2_1.geometry} material={materials.Sleeves_FRONT_2314663} />
        <mesh geometry={nodes.sleevefull2_2.geometry} material={materials.Sleeves_FRONT_2314663} />
        <mesh geometry={nodes.sleevefull2_3.geometry} material={materials.Sleeves_FRONT_2314663} />
      </group>
      {/* Sleeve 3 */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.sleevefull3_1.geometry} material={materials.Sleeves_FRONT_2208066} />
        <mesh geometry={nodes.sleevefull3_2.geometry} material={materials.Sleeves_FRONT_2208066} />
        <mesh geometry={nodes.sleevefull3_3.geometry} material={materials.Sleeves_FRONT_2208066} />
      </group>
    </group>
  )
}

export default Womenjacket;

useGLTF.preload('./3D-Model/Womenjacket-transformed.glb')
