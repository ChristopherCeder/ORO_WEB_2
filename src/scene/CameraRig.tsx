import { useRef, type ReactNode } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { sampleCameraPath, truckOffset } from '../../data/cameraPath'
import { scrollState } from '../../data/scrollState'

export function CameraRig() {
  const { camera } = useThree()
  const lookTarget = useRef(new THREE.Vector3())

  useFrame((_, delta) => {
    const progress = scrollState.progress
    const { position, lookAt } = sampleCameraPath(progress)
    camera.position.lerp(position, 1 - Math.pow(0.001, delta))
    lookTarget.current.lerp(lookAt, 1 - Math.pow(0.001, delta))
    camera.lookAt(lookTarget.current)
  })

  return null
}

export function TruckDriveSystem({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!group.current) return
    group.current.position.z = -truckOffset(scrollState.progress)
  })

  return <group ref={group}>{children}</group>
}
