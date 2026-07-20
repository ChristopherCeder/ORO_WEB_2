import { Worker } from '../primitives/Worker'

export function House() {
  return (
    <group position={[0, 0, -22]}>
      {/* Main house */}
      <mesh castShadow receiveShadow position={[0, 2.5, 0]}>
        <boxGeometry args={[14, 5, 10]} />
        <meshStandardMaterial color="#e8dfd0" roughness={0.85} />
      </mesh>
      {/* Roof */}
      <mesh castShadow position={[0, 5.8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <coneGeometry args={[10, 3.5, 4]} />
        <meshStandardMaterial color="#5c3d2e" roughness={0.9} />
      </mesh>
      {/* Front door */}
      <mesh castShadow position={[0, 1.4, 5.06]}>
        <boxGeometry args={[1.4, 2.6, 0.12]} />
        <meshStandardMaterial color="#3d2817" roughness={0.8} />
      </mesh>
      {/* Windows front */}
      {[-3.5, 3.5].map((x) => (
        <mesh key={x} castShadow position={[x, 3, 5.06]}>
          <boxGeometry args={[2, 1.5, 0.1]} />
          <meshStandardMaterial color="#87ceeb" roughness={0.1} metalness={0.5} transparent opacity={0.7} />
        </mesh>
      ))}
      {/* Garage (back) */}
      <mesh castShadow receiveShadow position={[0, 2, -7]}>
        <boxGeometry args={[12, 4, 6]} />
        <meshStandardMaterial color="#d4cbb8" roughness={0.85} />
      </mesh>
      <mesh castShadow position={[0, 4.2, -7]}>
        <boxGeometry args={[12.5, 0.35, 6.5]} />
        <meshStandardMaterial color="#444" roughness={0.7} />
      </mesh>
      {/* Garage door opening */}
      <mesh position={[0, 1.5, -3.95]}>
        <boxGeometry args={[8, 3, 0.1]} />
        <meshStandardMaterial color="#2a2520" roughness={0.9} />
      </mesh>
      {/* Back door */}
      <mesh castShadow position={[4.5, 1.3, -4.95]}>
        <boxGeometry args={[1.2, 2.4, 0.12]} />
        <meshStandardMaterial color="#3d2817" />
      </mesh>
      {/* Driveway */}
      <mesh receiveShadow position={[0, 0.02, -14]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 16]} />
        <meshStandardMaterial color="#7a7f87" roughness={0.85} />
      </mesh>
      {/* Porch */}
      <mesh castShadow receiveShadow position={[0, 0.25, 6.5]}>
        <boxGeometry args={[8, 0.5, 3]} />
        <meshStandardMaterial color="#8b7355" roughness={0.9} />
      </mesh>
    </group>
  )
}

export function GarageInterior() {
  return (
    <group position={[0, 0, -28]}>
      <Worker position={[-2, 0, 1]} rotation={[0, 0.8, 0]} tool="wrench" color="#1e3a5f" />
      <Worker position={[2.5, 0, -0.5]} rotation={[0, -2.2, 0]} tool="none" color="#8b2635" />
      {/* Paint booth glow */}
      <mesh position={[3.5, 2.5, -1]}>
        <boxGeometry args={[2.5, 3, 0.1]} />
        <meshStandardMaterial color="#ff8844" emissive="#ff6622" emissiveIntensity={0.4} transparent opacity={0.35} />
      </mesh>
      {/* Welding spark area */}
      <pointLight position={[-3, 2, 0]} color="#66ccff" intensity={2} distance={6} />
      <mesh position={[-3, 0.5, 0]}>
        <boxGeometry args={[0.8, 0.08, 0.8]} />
        <meshStandardMaterial color="#888" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh castShadow position={[-1, 0.5, 2]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[2.2, 0.9, 1.1]} />
        <meshStandardMaterial color="#c0392b" roughness={0.4} metalness={0.3} />
      </mesh>
    </group>
  )
}

export function ConstructionFront() {
  return (
    <group position={[0, 0, -14]}>
      {/* Scaffolding */}
      {[-5, 5].map((x) => (
        <group key={x} position={[x, 0, 6]}>
          <mesh castShadow position={[0, 3, 0]}>
            <boxGeometry args={[0.12, 6, 0.12]} />
            <meshStandardMaterial color="#c0a060" />
          </mesh>
          <mesh castShadow position={[0, 3, 2]}>
            <boxGeometry args={[0.12, 6, 0.12]} />
            <meshStandardMaterial color="#c0a060" />
          </mesh>
          {[1.5, 3, 4.5].map((y) => (
            <mesh key={y} castShadow position={[0, y, 1]}>
              <boxGeometry args={[2.5, 0.1, 0.1]} />
              <meshStandardMaterial color="#c0a060" />
            </mesh>
          ))}
        </group>
      ))}
      <Worker position={[-2, 0, 7]} rotation={[0, 0.2, 0]} tool="hammer" color="#5c4033" />
      <Worker position={[3, 0, 6.5]} rotation={[0, -1.5, 0]} tool="hammer" color="#4a3728" />
      {/* Lumber stack */}
      <mesh castShadow position={[6, 0.4, 5]} rotation={[0, 0.4, 0]}>
        <boxGeometry args={[3, 0.8, 1.2]} />
        <meshStandardMaterial color="#b8956a" roughness={0.95} />
      </mesh>
      {/* Foundation forms */}
      <mesh receiveShadow position={[0, 0.35, 9]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 4]} />
        <meshStandardMaterial color="#999" roughness={0.95} />
      </mesh>
    </group>
  )
}

export function InteriorRoom() {
  return (
    <group position={[0, 0, -22]}>
      {/* Floor */}
      <mesh receiveShadow position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#b8956a" roughness={0.9} />
      </mesh>
      {/* Walls (interior visible during inside shots) */}
      <mesh receiveShadow position={[0, 2.5, -4]}>
        <boxGeometry args={[12, 5, 0.15]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.95} />
      </mesh>
      <mesh receiveShadow position={[-6, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[8, 5, 0.15]} />
        <meshStandardMaterial color="#f0ebe3" roughness={0.95} />
      </mesh>
      {/* Handyman at wall */}
      <Worker position={[-3, 0.05, -2]} rotation={[0, 0, 0]} tool="hammer" color="#34495e" />
      {/* Drafting table */}
      <mesh castShadow position={[3, 0.75, -1]}>
        <boxGeometry args={[2.5, 0.08, 1.2]} />
        <meshStandardMaterial color="#6b4f2a" />
      </mesh>
      <mesh castShadow position={[3, 0.35, -1]}>
        <boxGeometry args={[0.08, 0.7, 0.08]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <mesh castShadow position={[3, 0.82, -1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 1.4]} />
        <meshStandardMaterial color="#dce8f5" roughness={0.95} />
      </mesh>
      <Worker position={[2, 0.05, -0.5]} rotation={[0, 0.6, 0]} tool="blueprint" color="#2c3e50" />
      <Worker position={[4.2, 0.05, -1.8]} rotation={[0, -2.4, 0]} tool="blueprint" color="#1a5276" />
      <pointLight position={[3, 3.5, -1]} intensity={8} color="#fff5e0" distance={10} />
    </group>
  )
}
