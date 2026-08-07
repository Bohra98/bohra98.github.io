import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import type { Mesh } from 'three'

function DistortedSphere() {
  const mesh = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y += delta * 0.1
    mesh.current.rotation.x += delta * 0.04
    const { pointer } = state
    mesh.current.rotation.y += pointer.x * 0.0006
    mesh.current.rotation.x += -pointer.y * 0.0006
  })

  return (
    <Sphere ref={mesh} args={[1.4, 128, 128]} position={[0, -0.2, -2.5]}>
      <MeshDistortMaterial
        color="#a3291f"
        attach="material"
        distort={0.3}
        speed={1.4}
        roughness={0.6}
        metalness={0.05}
        transparent
        opacity={0.35}
      />
    </Sphere>
  )
}

export function HeroScene() {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null
  }

  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.1} />
      <pointLight position={[4, 3, 5]} intensity={1.6} color="#f4c9a0" />
      <pointLight position={[-3, -3, 2]} intensity={0.5} color="#33415c" />
      <DistortedSphere />
    </Canvas>
  )
}
