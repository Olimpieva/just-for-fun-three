import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "Scene";

import css from "./App.module.scss";

const App = () => (
  <Canvas
    className={css.canvas}
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4],
    }}
  >
    <Scene />
  </Canvas>
);

export default App;
