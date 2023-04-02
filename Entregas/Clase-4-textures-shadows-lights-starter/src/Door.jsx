import { useTexture } from "@react-three/drei";
import { DoubleSide, FrontSide } from "three";

export default function Door() {
    const PATH = "/static/textures/door/"
    const props = useTexture({
        map: PATH + "color.jpg",
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })

    const PATH2 = "/static/textures/cube/"
    const props2 = useTexture({
        map: PATH2 + "color.jpg",
        displacementMap: PATH2 + 'height.png',
        normalMap: PATH2 + 'normal.jpg',
        roughnessMap: PATH2 + 'roughness.jpg',
        aoMap: PATH2 + 'ao.jpg',

    })



    return (
        <>
            <mesh rotation-y={Math.PI / 12}>
                <planeGeometry args={[2, 3]} />
                <meshStandardMaterial {...props} side={DoubleSide} />
            </mesh>

            


        </>

    )
}