import { OrbitControls, Text, Float } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { extend } from "@react-three/fiber";
import GaulModel from "./GaulModel";

extend({ OrbitControls: OrbitControls });

export default function Experience() {
  return (
    <>
      <OrbitControls
        makeDefault
        minDistance={15}
        maxDistance={20}
        enablePan={false}
      />

      <Perf position="top-left" />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <GaulModel />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="gray" />
      </mesh>

      <Float speed={10} floatIntensity={1}>
        <Text
          position={[0, 4, -5]}
          font="./hogira.semibold.otf"
          textAlign="center"
          color="#E27E00"
          fontSize={1}
        >
          El Galata Moribundo
        </Text>
      </Float>
    </>
  );
}
