import { Worker } from '../primitives/Worker'
import { Car } from '../primitives/Vehicles'
import { Bush, Mower, Tree } from '../primitives/Nature'

const treePositions: [number, number, number][] = [
  [-22, 0, -15], [-18, 0, 8], [-25, 0, 5], [15, 0, -18], [20, 0, 12],
  [-10, 0, 20], [8, 0, 22], [-30, 0, -8], [28, 0, -5], [-15, 0, -25],
  [12, 0, -8], [-8, 0, 15], [25, 0, 18], [-28, 0, 15],
]

export function LandscapingZone() {
  return (
    <group>
      {treePositions.map((pos, i) => (
        <Tree key={i} position={pos} scale={0.8 + (i % 4) * 0.15} />
      ))}
      <Bush position={[-12, 0.3, 6]} scale={1.2} />
      <Bush position={[-6, 0.3, 10]} scale={0.9} />
      <Bush position={[10, 0.3, 5]} scale={1.1} />
      <Mower position={[-4, 0, 4]} />
      <Worker position={[-7, 0, 7]} rotation={[0, 0.6, 0]} tool="shovel" color="#3d5a40" />
      <Worker position={[6, 0, 8]} rotation={[0, -1.2, 0]} tool="shovel" color="#2f4858" />
      <Worker position={[2, 0, 12]} rotation={[0, 3.1, 0]} tool="none" color="#4a6741" />
      {/* Pressure washing zone — driveway strip */}
      <mesh receiveShadow position={[-14, 0.02, 2]} rotation={[-Math.PI / 2, 0, 0.3]}>
        <planeGeometry args={[8, 3]} />
        <meshStandardMaterial color="#9aa3ad" roughness={0.4} metalness={0.1} />
      </mesh>
      <Worker position={[-13, 0, 3]} rotation={[0, -0.5, 0]} tool="none" color="#1f3a54" />
    </group>
  )
}

export function RoadsideZone() {
  return (
    <group>
      <mesh receiveShadow position={[35, 0.01, 5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 50]} />
        <meshStandardMaterial color="#3a3f47" roughness={0.95} />
      </mesh>
      <mesh receiveShadow position={[35, 0.02, 5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.15, 50]} />
        <meshStandardMaterial color="#f0c020" emissive="#f0c020" emissiveIntensity={0.15} />
      </mesh>
      <Car position={[38, 0, 8]} rotation={[0, -Math.PI / 2, 0]} color="#8e44ad" hoodOpen />
      <Worker position={[36.5, 0, 10]} rotation={[0, -1.8, 0]} tool="wrench" color="#1a365d" />
      {/* Hotshot rig passing */}
      <group position={[42, 0, -5]}>
        <mesh castShadow position={[0, 0.7, 0]}>
          <boxGeometry args={[1.2, 1, 2]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh castShadow position={[1.8, 0.45, 0]}>
          <boxGeometry args={[2.5, 0.35, 1.8]} />
          <meshStandardMaterial color="#444" />
        </mesh>
      </group>
    </group>
  )
}
