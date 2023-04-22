import { useTexture, useVideoTexture } from "@react-three/drei";
import { DoubleSide, VideoTexture } from "three";

export default function Video() {
  const video = document.getElementById("video");
  const texture = new VideoTexture(video);

  const playVideo = (e) => {
    video.play();
  };

  return (
    <>
      <mesh position={[0, 0, 5]} rotation={[0, Math.PI, 0]} onClick={playVideo}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshBasicMaterial map={texture} side={DoubleSide} />
      </mesh>
    </>
  );
}
