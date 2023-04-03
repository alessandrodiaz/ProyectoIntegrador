import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Door() {
  const sphereRef = useRef();
  const PATH = "/static/textures/sphere/";

  const props = useTexture({
    map: PATH + "color.jpg",
    // displacementMap: PATH + "height.png",
    normalMap: PATH + "normal.jpg",
    roughnessMap: PATH + "roughness.jpg",
    aoMap: PATH + "ao.jpg",
  });

  useFrame((state, delta) => {
    sphereRef.current.rotation.z += 1 * delta;
  });

  return (
    <>
      <mesh
        castShadow={true}
        receiveShadow={true}
        ref={sphereRef}
        position-z={-3}
        position-x={1}
      >
        <sphereGeometry args={[1, 15, 30]} />
        <meshStandardMaterial {...props} side={DoubleSide} />
      </mesh>
    </>
  );
}
