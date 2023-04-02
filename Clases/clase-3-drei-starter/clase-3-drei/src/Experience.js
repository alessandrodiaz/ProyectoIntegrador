import { useThree, extend } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Text,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";

extend({ OrbitControls });

export default function Experience() {
  const sphereRef = useRef();
  const cubeRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh ref={sphereRef} position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
        <Html
          center
          wrapperClass="label"
          distanceFactor={6}
          occlude={{ sphereRef, cubeRef }}
          position={[1, 1, 0]}
        >
          That's a sphere
        </Html>
      </mesh>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={2}
          mirror={0.5}
          color="red"
        />
      </mesh>
      <Text
        font="./bangers-v20-latin-regular.woff"
        fontSize={1}
        color="salmon"
        position-y={2.5}
        maxWidth={8}
        textAlign="center"
      >
        I LOVE PROYECTO INTEGRADOR I
      </Text>
    </>
  );
}
