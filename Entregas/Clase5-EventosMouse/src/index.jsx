import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { StrictMode } from "react";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const cameraSettings = {
  fov: 95,
  near: 0.1,
  far: 200,
  position: [5, 1, 0],
};
root.render(
  <StrictMode>
    <Canvas camera={cameraSettings} shadows={true}>
      <Suspense>
        <Experience />
      </Suspense>
    </Canvas>
  </StrictMode>
);
