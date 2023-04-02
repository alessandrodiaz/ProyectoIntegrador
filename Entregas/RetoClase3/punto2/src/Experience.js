import {
  OrbitControls,
  TrackballControls,
  Text,
  Float,
  PointerLockControls,
  PresentationControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { extend } from "@react-three/fiber";
import Model from "./Model";
import FoxModel from "./FoxModel";

extend({ TrackballControls: TrackballControls });

export default function Experience() {
  return (
    <>
      <TrackballControls rotateSpeed={1} minDistance={10} maxDistance={20} />

      <Perf position="top-left" />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Model />
      <FoxModel />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <Float speed={20} floatIntensity={1}>
        <Text
          position={[0, 4, -5]}
          font="./hogira.semibold.otf"
          textAlign="center"
          color="black"
          fontSize={1}
        >
          Hola
        </Text>
      </Float>
    </>
  );
}
