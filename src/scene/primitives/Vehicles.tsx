import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CarProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  color?: string
  scale?: number
  hoodOpen?: boolean
}

export function Car({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color = '#c0392b',
  scale = 1,
  hoodOpen = false,
}: CarProps) {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!group.current || !hoodOpen) return
    const hood = group.current.getObjectByName('hood')
    if (hood) hood.rotation.x = -0.35 + Math.sin(clock.elapsedTime * 1.5) * 0.03
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <mesh castShadow receiveShadow position={[0, 0.45, 0]}>
        <boxGeometry args={[1.8, 0.5, 3.6]} />
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.4} />
      </mesh>
      <mesh castShadow position={[0, 0.85, -0.15]}>
        <boxGeometry args={[1.5, 0.45, 1.8]} />
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.4} />
      </mesh>
      <mesh castShadow position={[0, 0.95, 0.55]}>
        <boxGeometry args={[1.35, 0.35, 1.1]} />
        <meshStandardMaterial color="#1a2535" roughness={0.1} metalness={0.8} transparent opacity={0.85} />
      </mesh>
      <mesh name="hood" castShadow position={[0, 0.72, 1.05]} rotation={hoodOpen ? [-0.35, 0, 0] : [0, 0, 0]}>
        <boxGeometry args={[1.55, 0.08, 0.9]} />
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.4} />
      </mesh>
      {[
        [-0.75, 0.25, 1.2],
        [0.75, 0.25, 1.2],
        [-0.75, 0.25, -1.2],
        [0.75, 0.25, -1.2],
      ].map((pos, i) => (
        <mesh key={i} castShadow position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.28, 0.28, 0.22, 12]} />
          <meshStandardMaterial color="#111" roughness={0.9} />
        </mesh>
      ))}
    </group>
  )
}

interface FlatbedProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  driveOffset?: number
  hasCar?: boolean
}

export function FlatbedTruck({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  driveOffset = 0,
  hasCar = true,
}: FlatbedProps) {
  return (
    <group position={[position[0], position[1], position[2] - driveOffset]} rotation={rotation}>
      <mesh castShadow receiveShadow position={[-1.1, 0.55, 0]}>
        <boxGeometry args={[1.4, 1.1, 2.2]} />
        <meshStandardMaterial color="#1e3a5f" roughness={0.6} />
      </mesh>
      <mesh castShadow position={[-1.1, 1.05, 0.55]}>
        <boxGeometry args={[1.2, 0.55, 0.9]} />
        <meshStandardMaterial color="#87b8e8" roughness={0.15} metalness={0.6} transparent opacity={0.7} />
      </mesh>
      <mesh castShadow receiveShadow position={[1.4, 0.35, 0]}>
        <boxGeometry args={[3.8, 0.25, 2.4]} />
        <meshStandardMaterial color="#333" roughness={0.8} />
      </mesh>
      <mesh castShadow position={[1.4, 0.55, -1.05]}>
        <boxGeometry args={[3.6, 0.08, 0.12]} />
        <meshStandardMaterial color="#f0a020" emissive="#f0a020" emissiveIntensity={0.3} />
      </mesh>
      {[
        [-1.6, 0.28, 0.85],
        [-1.6, 0.28, -0.85],
        [2.8, 0.28, 0.85],
        [2.8, 0.28, -0.85],
      ].map((pos, i) => (
        <mesh key={i} castShadow position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.32, 0.32, 0.24, 12]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      ))}
      {hasCar && (
        <Car position={[1.4, 0.72, 0]} rotation={[0, Math.PI / 2, 0]} color="#2ecc71" scale={0.85} />
      )}
    </group>
  )
}
