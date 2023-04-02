import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function FoxModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/Fox.glb");
  const { actions, mixer } = useAnimations(animations, group);

  console.log(animations);
  useEffect(() => {
    actions.Walk.play();
    return () => {
      actions.Walk.stop();
    };
  }, [actions]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.05}
      position={[3, -1, 1]}
    >
      <group>
        <group name="root">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            name="fox"
            geometry={nodes.fox.geometry}
            material={materials.fox_material}
            skeleton={nodes.fox.skeleton}
            morphTargetDictionary={nodes.fox.morphTargetDictionary}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/Fox.glb");
