import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Floor() {
  const PATH = "/static/textures/floor/";

  const props = useTexture({
    map: PATH + "color.jpg",
    // displacementMap: PATH + "height.png",
    normalMap: PATH + "normal.jpg",
    roughnessMap: PATH + "roughness.jpg",
    aoMap: PATH + "ao.jpg",
  });

  return (
    <mesh
      castShadow={true}
      receiveShadow={true}
      position-y={-2.5}
      rotation-x={-Math.PI * 0.5}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial {...props} side={DoubleSide} />
    </mesh>
  );
}
