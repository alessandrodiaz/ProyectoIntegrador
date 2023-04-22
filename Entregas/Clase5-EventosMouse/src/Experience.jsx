import { useRef, useState } from "react";
import { useTexture, useVideoTexture } from "@react-three/drei";
import { OrbitControls, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Banana from "./models/Banana";
import Floor from "./Floor";
import Lemon from "./models/Lemon";
import VideoRoma from "./VideoRoma";
import { Hamburger } from "./models/Hamburger";

import { DoubleSide, SpotLightHelper } from "three";

export default function Experience() {
  // Luces
  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, 1);

  // Imagen
  const [showSecondImage, setShowSecondImage] = useState(false);
  const PATH = showSecondImage ? "/imagen2.jpg" : "/imagen.jpg";

  const props = useTexture({
    map: PATH,
  });

  const handleImageClick = () => {
    setShowSecondImage((prev) => !prev);
  };

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault minDistance={10} maxDistance={30} />

      {/* Luces */}
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight
        ref={spotLightRef}
        position={[4, 4, 0]}
        intensity={20}
        distance={20}
        decay={3}
        color="lightyellow"
        castShadow={true}
        shadowMap
      />

      {/* Pared de la imagen */}

      <mesh
        onContextMenu={handleImageClick}
        position={[0, 0, -5]}
        rotation={[0, 0, 0]}
      >
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial {...props} side={DoubleSide} />
      </mesh>

      <VideoRoma />
      <Banana position={[3, -0.5, 2]} scale={0.3} />
      <Lemon position={[-3, -2, 3]} scale={0.3} />
      <Hamburger position={[-1, -2, -2]} scale={0.3} />
      <Floor />
    </>
  );
}
