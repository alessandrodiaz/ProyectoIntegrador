/**
 * Hooks Reactjs: https://legacy.reactjs.org/docs/hooks-intro.html
 * React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
 * Hooks de R3F: https://docs.pmnd.rs/react-three-fiber/api/hooks
 * React three drei: https://github.com/pmndrs/drei
 * Three.js: https://threejs.org/docs/
 *
 */

import {
  Center,
  OrbitControls,
  PointerLockControls,
  PresentationControls,
} from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

extend({ OrbitControls: OrbitControls });

export function Experience() {
  const three = useThree();

  const boxRef = useRef();
  const coneRef = useRef();
  const sphereRef = useRef();
  const groupRef = useRef();

  // const {camera, gl} = useThree()

  useFrame((state, delta) => {
    boxRef.current.rotation.x += 1 * delta;
    coneRef.current.rotation.z += 1 * delta;
    sphereRef.current.position.x = Math.sin(state.clock.getElapsedTime()) * 2;
  });

  return (
    <>
      <OrbitControls
        makeDefault
        //enableRotate={false}
        enablePan={false}
        minDistance={5}
        maxDistance={10}
      />

      <ambientLight color={"gray"} intensity={0.5} />

      <directionalLight
        position={[1, 1, 1]}
        intensity={1.5}
        color={"white"}
        castShadow
      />

      <Center>
        <group ref={groupRef}>
          <mesh ref={sphereRef} position-z={-3}>
            <sphereGeometry args={[1, 15, 60]} />
            <meshStandardMaterial color={"purple"} />
          </mesh>
          <mesh ref={boxRef}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color={"orange"} />
          </mesh>
          <mesh ref={coneRef} position-z={3}>
            <coneGeometry args={[1, 1, 30]} />
            <meshStandardMaterial color={"red"} />
          </mesh>
        </group>

        <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={1}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color={"greenyellow"} />
        </mesh>
      </Center>
    </>
  );
}
