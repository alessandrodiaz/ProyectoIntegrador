import "./styles.css";
import ReactDom from "react-dom/client";
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { sRGBEncoding } from "three";

const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    gl={{
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping,
    }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [3, 2, 6],
    }}
  >
    <Experience />
  </Canvas>
);
