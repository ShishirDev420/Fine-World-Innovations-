import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

/* 
  Inner pulsing filament core — represents the "lightbulb" concept from the logo.
  Wireframe sphere with animated glow to evoke innovation/energy.
*/
function GlowingCore() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.15
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1
    const scale = 1 + Math.sin(t * 2) * 0.02
    meshRef.current.scale.set(scale, scale, scale)
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.8, 2]} />
      <meshBasicMaterial 
        color="#00e5ff" 
        wireframe 
        transparent 
        opacity={0.35}
      />
    </mesh>
  )
}

/*
  Outer glass globe — the world/sphere element from the FWI logo.
  MeshDistortMaterial creates organic, living glass that subtly breathes.
*/
function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.08
    meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.05) * 0.02
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#0a3d7f"
          transparent
          opacity={0.12}
          roughness={0.1}
          metalness={0.9}
          distort={0.15}
          speed={1.5}
        />
      </Sphere>
    </Float>
  )
}

/*
  Orbital rings — represent connectivity and global reach.
  Multiple rings at different angles rotate at different speeds.
*/
function OrbitalRings() {
  const ring1Ref = useRef<THREE.Mesh>(null!)
  const ring2Ref = useRef<THREE.Mesh>(null!)
  const ring3Ref = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ring1Ref.current.rotation.z = t * 0.2
    ring2Ref.current.rotation.z = -t * 0.15
    ring3Ref.current.rotation.z = t * 0.1
  })

  return (
    <>
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.005, 16, 100]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.2} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.0, 0.005, 16, 100]} />
        <meshBasicMaterial color="#64b5f6" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[Math.PI / 5, -Math.PI / 3, 0]}>
        <torusGeometry args={[2.5, 0.003, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
      </mesh>
    </>
  )
}

/* 
  Floating data particles — represent data-driven innovation.
  Tiny spheres orbiting around the globe at random speeds/radii.
*/
function DataParticles() {
  const groupRef = useRef<THREE.Group>(null!)
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      radius: 1.8 + Math.random() * 1.2,
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
      tilt: (Math.random() - 0.5) * Math.PI * 0.8,
      size: 0.01 + Math.random() * 0.02,
      color: i % 3 === 0 ? '#00e5ff' : i % 3 === 1 ? '#64b5f6' : '#ffffff',
    }))
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const children = groupRef.current.children
    particles.forEach((p, i) => {
      const angle = t * p.speed + p.offset
      const child = children[i]
      if (child) {
        child.position.set(
          Math.cos(angle) * p.radius * Math.cos(p.tilt),
          Math.sin(p.tilt) * p.radius * 0.5 + Math.sin(angle * 0.5) * 0.3,
          Math.sin(angle) * p.radius * Math.cos(p.tilt)
        )
      }
    })
  })

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

/* Main exported Globe scene with full composition */
export default function ThreeGlobe() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        {/* Subtle ambient + directional lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#64b5f6" />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#00e5ff" distance={5} decay={2} />
        
        {/* Starfield background */}
        <Stars radius={50} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />
        
        {/* The composition: glass globe + inner filament + orbital rings + data particles */}
        <GlassSphere />
        <GlowingCore />
        <OrbitalRings />
        <DataParticles />
      </Canvas>
    </div>
  )
}
