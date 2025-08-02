import { useAnimations, useFBX } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model()
{
    const model = useFBX('./Talking Phone Pacing.fbx')
    const animations = useAnimations(model.animations, model)
    useEffect(() => {
        const action = animations.actions["mixamo.com"]
        action.play()
    }, [])
    return <primitive object={ model } scale={0.006} position={[0.6, -0.7, 0.7]} rotation-y={-1.5} />
}

