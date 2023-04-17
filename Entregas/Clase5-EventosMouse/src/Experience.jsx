import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Banana from './models/Banana'
import { Hamburger } from './models/Hamburger'
import Lemon from './models/Lemon'

export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow={true} position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Sky />
        <Banana position-x = {-1} scale={0.1}/>
        <Lemon position-x = {1} scale={0.1}/>
        <Hamburger scale={0.08}/>
    </>
}