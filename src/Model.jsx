import { useAnimations, useGLTF, useFBX } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model()
{
    const model = useFBX('./Texting.fbx')
    // const model = useGLTF('./bearded_man_-_low_poly_animated.glb')
    const animations = useAnimations(model.animations, model)
    model.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
    console.log(model)
    useEffect(() => {
        const action = animations.actions["mixamo.com"]
        action.play()
    }, [])
    return <primitive object={ model } scale={0.005} position={[0.6, -0.82, 0.5]} rotation-y={-1.0} />
}

