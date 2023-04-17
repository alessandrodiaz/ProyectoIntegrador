/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Banana(props) {
    const bananaRef = useRef(null)

    const [rotateBanana, setRotateBanana] = useState(false)

    const { nodes, materials } = useGLTF("/static/banana.glb");

    useFrame((state, delta) => {
        if (rotateBanana) {
            bananaRef.current.rotation.x += Math.sin(state.clock.elapsedTime) * delta
            //bananaRef.current.position.y += Math.sin(state.clock.elapsedTime) * delta
            bananaRef.current.children[0].material.color.set(`hsl(${Math.random()*360},100%, 50%)`)
        }

    })









    const onHandleBanana = (event) => {
        setRotateBanana(true)
        console.log(event);
        console.log("distance", event.distance); // Distancia entre la cámara y el punto de contacto del rayo.
        console.log("point", event.point); // Punto de coordenadas en 3D de donde hizo el contacto del rayo en el objeto. 
        console.log("uv", event.uv); // Punto de coordenadas en 2D de donde hizo el contacto el rayo con la geometría.
        console.log("object", event.object); // Retorna el objeto que fue interceptado. 
        console.log("eventObject", event.eventObject); // Retorna el objeto que escucho el evento.
        console.log("x", event.x); // Retorna las coordenadas 2D del puntero del mouse en la posición x.
        console.log("y", event.y); // Retorna las coordenadas 2D del puntero del mouse en la posición y.
        console.log("shiftKey", event.shiftKey); // retorna true si el evento fue realizado presionando la tecla shiftKey.
        console.log("ctrlKey", event.ctrlKey); // retorna true si el evento fue realizado presionando la tecla ctrlKey.
        console.log("metaKey", event.metaKey); // retorna true si el evento fue realizado presionando la tecla metaKey.
    }


    return (
        <group ref={bananaRef} {...props} dispose={null}
        onPointerMove={onHandleBanana}>
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                position={[-4.65, 2.46, 0]}
                rotation={[0, 0, -0.68]}
            />
        </group>
    );
}

useGLTF.preload("/static/banana.glb");