import { OrbitControls } from "@react-three/drei";
import { useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Door from "./Door";
import Floor from "./Floor";
import Sphere from "./Sphere";
import { useRef } from "react";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export default function Experience() {
  const directionalLightRef = useRef();
  const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const rectAreaLightRef = useRef();
  const spotLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 1);

  useHelper(hemisphereLightRef, HemisphereLightHelper, 0.5);

  useHelper(pointLightRef, PointLightHelper, 0.5);

  useHelper(rectAreaLightRef, RectAreaLightHelper, 1);

  useHelper(spotLightRef, SpotLightHelper, 1);

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      {/* <ambientLight intensity={0.5} /> */}

      {/* <directionalLight
        ref={directionalLightRef}
        position={[0, 5, -6]}
        intensity={10.5}
        castShadow={true}
      /> */}

      {/* <hemisphereLight
        ref={hemisphereLightRef}
        intensity={5}
        position={[0, 4, 0]}
        castShadow={true}
        color={"lightyellow"}
      /> */}

      <pointLight
        ref={pointLightRef}
        position={[1, 2, -1]}
        intensity={6}
        castShadow={true}
      />

      {/* <rectAreaLight
        ref={rectAreaLightRef}
        position={[0, 1, 2]}
        intensity={50}
        height={1}
        width={1}
        power={2000}
      /> */}

      {/* <spotLight
        ref={spotLightRef}
        position={[0, 1, 2]}
        intensity={10}
        distance={10}
        decay={3}
        castShadow={true}
      /> */}

      <Door />
      <Floor />
      <Sphere />
    </>
  );
}
