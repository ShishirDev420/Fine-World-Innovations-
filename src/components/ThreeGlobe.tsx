import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedGlobe() {
  const sphereRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
      sphereRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group>
      {/* Outer Glass Shell */}
      <Sphere args={[2, 64, 64]} ref={sphereRef}>
        <MeshDistortMaterial 
          color="#00e5ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          transmission={1}
          thickness={1}
          transparent={true}
          opacity={0.3}
        />
      </Sphere>
      
      {/* Inner Core (Filament/Globe concept) */}
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial 
          color="#ffb300"
          emissive="#ffb300"
          emissiveIntensity={2}
          wireframe
        />
      </Sphere>

      {/* Ambient and point lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00e5ff" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#ffb300" />
    </group>
  )
}

export default function ThreeGlobe() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#003366] via-midnight to-midnight pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <AnimatedGlobe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
