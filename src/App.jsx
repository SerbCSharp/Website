import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Preload } from '@react-three/drei'

export default function App()
{
  return (
  <Canvas flat camera={{ fov: 75, position: [0, 0, 20] }} eventSource={document.getElementById('root')} eventPrefix="client">
    <color attach="background" args={['#f0f0f0']} />
    <Frame id="JS" name="ThreeJs" bg="#d1d1ca" url="https://three-js-eight-henna.vercel.app/" position={[-2.3, 0, 0]} />
    <Frame id="C#" name="Microservice" bg="#e4cdac" url="https://github.com/SerbCSharp/Catalog" position={[-1.15, 0, 0]} />
    <Frame id="JS" name="Portfolio" bg="#d1d1ca" url="https://portfolio-eta-five-24.vercel.app/" />
    <Frame id="C#" name="TelegramBot" bg="#e4cdac" url="https://github.com/SerbCSharp/TelegramChatBot" position={[1.15, 0, 0]} />
    <Frame id="JS" name="R3F" bg="#d1d1ca" url="https://r3-f-three.vercel.app/" position={[2.3, 0, 0]} />
    <Rig />
  </Canvas>
  )
}

function Frame({ id, name, bg, url, width = 1, height = 1.61803398875, ...props }) {
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <group {...props}>
      <Text fontSize={0.1} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>{name}</Text>
      <Text fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>{id}</Text>
      <Text fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>"Sergey Belyakov"</Text>
        <mesh onClick={ x => window.location.href = url } onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
            <planeGeometry args={[width, height]} />
        <MeshPortalMaterial>
          <color attach="background" args={[bg]} />
        </MeshPortalMaterial>
        </mesh>
    </group>
  )
}

function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree()
  useEffect(() => {
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  })
  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}
