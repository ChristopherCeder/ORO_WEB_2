import { ContactShadows, Environment, Sky } from '@react-three/drei'
import { LandscapingZone, RoadsideZone } from './zones/LandscapingZone'
import { ConstructionFront, GarageInterior, House, InteriorRoom } from './zones/House'
import { FlatbedTruck } from './primitives/Vehicles'
import { CameraRig, TruckDriveSystem } from './CameraRig'

export function World() {
  return (
    <>
      <CameraRig />

      <Sky
        distance={450000}
        sunPosition={[80, 24, -40]}
        inclination={0.52}
        azimuth={0.22}
        mieCoefficient={0.008}
        mieDirectionalG={0.9}
        rayleigh={0.4}
        turbidity={8}
      />

      <fog attach="fog" args={['#c9d6e3', 55, 130]} />

      <ambientLight intensity={0.35} color="#ffe8cc" />
      <directionalLight
        castShadow
        position={[40, 60, 20]}
        intensity={1.6}
        color="#ffd9a0"
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={150}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-camera-top={60}
        shadow-camera-bottom={-60}
      />
      <directionalLight position={[-30, 20, -20]} intensity={0.25} color="#88aacc" />

      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#4a7c59" roughness={0.95} />
      </mesh>
      {/* Property boundary hint — lighter lawn around house */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -5]}>
        <planeGeometry args={[50, 45]} />
        <meshStandardMaterial color="#5a9458" roughness={0.92} />
      </mesh>

      <LandscapingZone />
      <RoadsideZone />
      <House />
      <GarageInterior />
      <ConstructionFront />
      <InteriorRoom />

      <TruckDriveSystem>
        <FlatbedTruck position={[0, 0, -42]} rotation={[0, 0, 0]} hasCar />
        <WorkerLoading position={[2, 0, -40]} />
      </TruckDriveSystem>

      <ContactShadows
        position={[0, 0.01, -5]}
        opacity={0.45}
        scale={80}
        blur={2.5}
        far={30}
        color="#1a2a1a"
      />

      <Environment preset="sunset" />
    </>
  )
}

function WorkerLoading({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow position={[0, 0.95, 0]}>
        <capsuleGeometry args={[0.22, 0.55, 4, 8]} />
        <meshStandardMaterial color="#1e3a5f" />
      </mesh>
      <mesh castShadow position={[0, 1.55, 0]}>
        <sphereGeometry args={[0.2, 12, 12]} />
        <meshStandardMaterial color="#e8c4a0" />
      </mesh>
    </group>
  )
}
