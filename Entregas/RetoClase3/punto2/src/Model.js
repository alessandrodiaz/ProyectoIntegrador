import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { nodes, materials } = useGLTF("/static/Hamburger.glb");

  return (
    <group scale={0.1}>
      <mesh
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
        position={[-30, -0.1, 0]}
      />

      <mesh
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[-30, 2.82, 0]}
      />
      <mesh
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[-30, 3.04, 0]}
      />
      <mesh
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[-30, 1.77, 0]}
      />
    </group>
  );
}

useGLTF.preload("/static/Hamburger.glb");
