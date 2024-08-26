import React, { useRef } from "react";
import { Mesh } from "three";
import * as Three from "three";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import img from "./assets/frame.png"

const Cyl = () => {
  
  let tex = useTexture(img);
let cyl = useRef(null)
  useFrame((state, delta)=>{
    cyl.current.rotation.y += delta;
  })
  return (
    <group rotation={[0, 1.4, 0.5]}>
    <mesh ref={cyl} >
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial map={tex} transparent side={Three.DoubleSide} />
    </mesh>
    </group>
  );
};

export default Cyl;
