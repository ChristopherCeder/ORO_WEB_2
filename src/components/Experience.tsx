import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import * as THREE from 'three'
import { World } from '../scene/World'

interface ExperienceProps {
  onReady: () => void
}

export function Experience({ onReady }: ExperienceProps) {
  const [started, setStarted] = useState(false)

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ fov: 45, near: 0.1, far: 300, position: [0, 72, 55] }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        onCreated={() => {
          if (!started) {
            setStarted(true)
            onReady()
          }
        }}
      >
        <Suspense fallback={null}>
          <World />
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{ background: '#0d1117' }}
        innerStyles={{ background: '#c45a1a', width: 160 }}
        barStyles={{ background: '#f0a020' }}
        dataStyles={{ color: '#e8dfd0', fontFamily: 'DM Sans, sans-serif', fontSize: 12 }}
      />
    </>
  )
}
