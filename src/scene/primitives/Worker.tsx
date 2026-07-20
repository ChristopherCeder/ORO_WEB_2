import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface WorkerProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  color?: string
  hatColor?: string
  animate?: boolean
  tool?: 'shovel' | 'wrench' | 'blueprint' | 'hammer' | 'none'
}

export function Worker({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color = '#2d4a6f',
  hatColor = '#f0a020',
  animate = true,
  tool = 'none',
}: WorkerProps) {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!group.current || !animate) return
    group.current.position.y =
      position[1] + Math.sin(clock.elapsedTime * 2 + position[0]) * 0.03
  })

  return (
    <group ref={group} position={position} rotation={rotation}>
      <mesh castShadow position={[0, 0.95, 0]}>
        <capsuleGeometry args={[0.22, 0.55, 4, 8]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      <mesh castShadow position={[0, 1.55, 0]}>
        <sphereGeometry args={[0.2, 12, 12]} />
        <meshStandardMaterial color="#e8c4a0" roughness={0.9} />
      </mesh>
      <mesh castShadow position={[0, 1.72, 0]}>
        <sphereGeometry args={[0.24, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={hatColor} roughness={0.7} />
      </mesh>
      {tool === 'shovel' && (
        <group position={[0.35, 0.7, 0.1]} rotation={[0.4, 0, -0.5]}>
          <mesh castShadow>
            <boxGeometry args={[0.05, 0.7, 0.05]} />
            <meshStandardMaterial color="#6b4f2a" />
          </mesh>
          <mesh castShadow position={[0, -0.42, 0]}>
            <boxGeometry args={[0.18, 0.12, 0.04]} />
            <meshStandardMaterial color="#888" metalness={0.6} />
          </mesh>
        </group>
      )}
      {tool === 'wrench' && (
        <mesh castShadow position={[0.32, 0.9, 0.15]} rotation={[0, 0, -0.8]}>
          <boxGeometry args={[0.06, 0.35, 0.04]} />
          <meshStandardMaterial color="#aaa" metalness={0.8} roughness={0.3} />
        </mesh>
      )}
      {tool === 'hammer' && (
        <group position={[0.3, 0.85, 0]} rotation={[0.2, 0, -0.6]}>
          <mesh castShadow>
            <boxGeometry args={[0.05, 0.45, 0.05]} />
            <meshStandardMaterial color="#6b4f2a" />
          </mesh>
          <mesh castShadow position={[0, 0.28, 0]}>
            <boxGeometry args={[0.14, 0.08, 0.08]} />
            <meshStandardMaterial color="#555" metalness={0.5} />
          </mesh>
        </group>
      )}
      {tool === 'blueprint' && (
        <mesh castShadow position={[0, 0.75, 0.35]} rotation={[-Math.PI / 2.5, 0, 0]}>
          <boxGeometry args={[0.55, 0.75, 0.02]} />
          <meshStandardMaterial color="#dce8f5" roughness={0.95} />
        </mesh>
      )}
    </group>
  )
}
