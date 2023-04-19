import { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { OrbitControls, Sky, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Banana from "./models/Banana";
import Floor from "./Floor";
import { Hamburger } from "./models/Hamburger";
import Lemon from "./models/Lemon";
import { PointLightHelper } from "three";

export default function Experience() {
  // Luces
  const pointLightRef = useRef();
  useHelper(pointLightRef, PointLightHelper, 0.5);

  // Imagen
  // const paredRef = useRef();

  const [clicked, setClicked] = useState(false);

  const PATH = "/imagen.jpg";

  const props = useTexture({
    map: PATH,
  });

  useFrame((state, delta) => {
    // paredRef.current.rotation.z += 1 * delta;
  });

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      <pointLight
        ref={pointLightRef}
        position={[-3, 4, 2]}
        intensity={4}
        color={"white"}
        castShadow={true}
        shadowMap
      />

      {/* Pared de la imagen */}

      <mesh position={[0, 0, -5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshBasicMaterial color={0xffffff} />
      </mesh>

      {/* Pared video */}

      <mesh position={[0, 0, 5]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshBasicMaterial color={0xffffff} />
      </mesh>

      <Banana position={[3, -0.5, 3]} scale={0.3} />
      <Lemon
        castShadow={true}
        receiveShadow={true}
        position={[-3, -2, 3]}
        scale={0.3}
      />
      <Hamburger position={[-1, -2, -2]} scale={0.3} />
      <Floor />
    </>
  );
}
