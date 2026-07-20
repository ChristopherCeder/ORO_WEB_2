import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface TreeProps {
  position: [number, number, number]
  scale?: number
}

export function Tree({ position, scale = 1 }: TreeProps) {
  const foliage = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!foliage.current) return
    foliage.current.rotation.z = Math.sin(clock.elapsedTime + position[0]) * 0.04
  })

  const s = scale
  return (
    <group position={position} scale={s}>
      <mesh castShadow position={[0, 0.75 * s, 0]}>
        <cylinderGeometry args={[0.12 * s, 0.18 * s, 1.5 * s, 6]} />
        <meshStandardMaterial color="#5c3d1e" roughness={0.95} />
      </mesh>
      <mesh ref={foliage} castShadow position={[0, 2 * s, 0]}>
        <coneGeometry args={[0.9 * s, 2 * s, 7]} />
        <meshStandardMaterial color="#2d6b3a" roughness={0.85} />
      </mesh>
      <mesh castShadow position={[0, 2.8 * s, 0]}>
        <coneGeometry args={[0.65 * s, 1.4 * s, 7]} />
        <meshStandardMaterial color="#358744" roughness={0.85} />
      </mesh>
    </group>
  )
}

export function Bush({ position, scale = 1 }: TreeProps) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow>
        <sphereGeometry args={[0.55, 8, 8]} />
        <meshStandardMaterial color="#3a7a45" roughness={0.9} />
      </mesh>
      <mesh castShadow position={[0.35, -0.1, 0.2]}>
        <sphereGeometry args={[0.4, 8, 8]} />
        <meshStandardMaterial color="#458752" roughness={0.9} />
      </mesh>
    </group>
  )
}

export function Mower({ position }: { position: [number, number, number] }) {
  const wheel = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!wheel.current) return
    wheel.current.rotation.x = clock.elapsedTime * 3
  })

  return (
    <group position={position}>
      <mesh castShadow position={[0, 0.35, 0]}>
        <boxGeometry args={[0.9, 0.35, 1.4]} />
        <meshStandardMaterial color="#e63920" roughness={0.5} />
      </mesh>
      <mesh castShadow position={[0, 0.65, -0.35]}>
        <boxGeometry args={[0.7, 0.25, 0.4]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <group ref={wheel} position={[0.35, 0.18, 0.45]}>
        <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.18, 0.12, 10]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      </group>
      <mesh castShadow position={[-0.35, 0.18, 0.45]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.12, 10]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </group>
  )
}
