import * as THREE from 'three'
import { useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useCursor, useTexture, CameraControls, Gltf, Text } from '@react-three/drei'

export default function App()
{
  return (
  <Canvas flat camera={{ fov: 75, position: [0, 0, 20] }} eventSource={document.getElementById('root')} eventPrefix="client">
    <color attach="background" args={['slategrey']} />
    <Frame id="JS" name="ThreeJs" bg="./textures/Portal.JPG" url="https://three-js-eight-henna.vercel.app/" position={[-2.3, 0, 0]} rotation={[0, 0, 0]} />
    <Frame id="C#" name="Microservice" bg="./textures/Microservice.JPG" url="https://github.com/SerbCSharp/Catalog" position={[-1.15, 0, 0]} />
    <Frame id="JS" name="Portfolio" bg="./textures/Portfolio.JPG" url="https://portfolio-eta-five-24.vercel.app/" position={[0, 0, 0]} />
    <Frame id="C#" name="TelegramBot" bg="./textures/TelegramBot.JPG" url="https://github.com/SerbCSharp/TelegramChatBot" position={[1.15, 0, 0]} />
    <Frame id="JS" name="R3F" bg="./textures/R3F.JPG" url="https://r3-f-three.vercel.app/" position={[2.3, 0, 0]} rotation={[0, 0, 0]} />
    <Rig />
          <Gltf src="rp_dennis_posed_004_30k.glb" scale={0.5} position={[0.6, -0.7, 0.5]} />
  </Canvas>
  )
}

function Frame({ id, name, bg, url, width = 1.075, height = 1.61803398875, ...props }) {
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <group {...props}>

              <directionalLight position={ [ 0, 0, 2 ] } intensity={ 0.8 } />

      <Text color='slategrey' fontSize={0.1} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>{name}</Text>
      <Text color='slategrey' fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>{id}</Text>
      <Text color='slategrey' fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>Sergey Belyakov</Text>
        <mesh onClick={ x => window.location.href = url } onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
          <planeGeometry args={[width, height]} />
          <meshStandardMaterial map={ useTexture(bg) } side={THREE.DoubleSide}>
            {/* <color attach="background" args={[bg]} /> */}
          </meshStandardMaterial>
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
