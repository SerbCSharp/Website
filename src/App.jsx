import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Preload } from '@react-three/drei'

export const App = () => (
  <Canvas flat camera={{ fov: 75, position: [0, 0, 20] }} eventSource={document.getElementById('root')} eventPrefix="client">
    <color attach="background" args={['#f0f0f0']} />
    <Frame id="JS" name="ThreeJs" author="Sergey Belyakov" bg="#d1d1ca" position={[-2.3, 0, 0]}>
    </Frame>
    <Frame id="C#" name="Microservice" author="Sergey Belyakov" bg="#e4cdac" position={[-1.15, 0, 0]}>
    </Frame>
    <Frame id="JS" name="Portfolio" author="Sergey Belyakov" bg="#d1d1ca">
    </Frame>
    <Frame id="C#" name="TelegramBot" author="Sergey Belyakov" bg="#e4cdac" position={[1.15, 0, 0]}>
    </Frame>
    <Frame id="JS" name="R3F" author="Sergey Belyakov" bg="#d1d1ca" position={[2.3, 0, 0]}>
    </Frame>
    <Rig />
  </Canvas>
)

function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
  return (
    <group {...props}>
      <Text fontSize={0.1} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
        {name}
      </Text>
      <Text fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
        {id}
      </Text>
      <Text fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
        {author}
      </Text>
        <mesh>
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
