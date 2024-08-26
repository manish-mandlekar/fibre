import { Canvas } from "@react-three/fiber";
import React from "react";
// import { EffectComposer } from "@react-three/postprocessing";
import { Bloom , EffectComposer } from '@react-three/postprocessing'
import "./style.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import Cyl from "./Cyl";
const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            intensity={1.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
