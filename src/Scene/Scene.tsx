import React from "react";
import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";

import css from "./Scene.module.scss";

/* eslint-disable */
const Scene = () => {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf",
  );

  return (
    <>
      <color args={["#373a67"]} attach="background" />

      <Environment preset="park" />

      <PresentationControls
        global
        rotation={[0.15, 0.05, 0]}
        polar={[-0.3, 0.3]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.5}
            intensity={65}
            color={"#a3a3dc"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.5, -1.15]}
          />

          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass={css.htmlScreen}
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://just-for-fun-gold.vercel.app/" />
            </Html>
          </primitive>

          <Text
            font="./PressStart2P-Regular.ttf"
            fontSize={0.5}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            have fun
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default Scene;
