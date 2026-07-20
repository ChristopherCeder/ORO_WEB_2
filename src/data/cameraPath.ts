import * as THREE from 'three'

export interface CameraKeyframe {
  progress: number
  position: THREE.Vector3
  lookAt: THREE.Vector3
}

export const cameraKeyframes: CameraKeyframe[] = [
  {
    progress: 0,
    position: new THREE.Vector3(0, 72, 55),
    lookAt: new THREE.Vector3(0, 0, -5),
  },
  {
    progress: 0.12,
    position: new THREE.Vector3(-8, 58, 38),
    lookAt: new THREE.Vector3(-5, 0, 0),
  },
  {
    progress: 0.22,
    position: new THREE.Vector3(52, 28, 18),
    lookAt: new THREE.Vector3(38, 2, 8),
  },
  {
    progress: 0.34,
    position: new THREE.Vector3(18, 14, -22),
    lookAt: new THREE.Vector3(0, 4, -28),
  },
  {
    progress: 0.44,
    position: new THREE.Vector3(-6, 8, -32),
    lookAt: new THREE.Vector3(0, 5, -30),
  },
  {
    progress: 0.52,
    position: new THREE.Vector3(0, 6, -8),
    lookAt: new THREE.Vector3(0, 5, -22),
  },
  {
    progress: 0.6,
    position: new THREE.Vector3(0, 5.2, -14.5),
    lookAt: new THREE.Vector3(0, 4.5, -18),
  },
  {
    progress: 0.68,
    position: new THREE.Vector3(2.5, 4.8, -17.2),
    lookAt: new THREE.Vector3(-2, 4.2, -19.5),
  },
  {
    progress: 0.76,
    position: new THREE.Vector3(1.5, 4.8, -19.8),
    lookAt: new THREE.Vector3(3.5, 4.5, -19.5),
  },
  {
    progress: 0.84,
    position: new THREE.Vector3(0, 5.5, -34),
    lookAt: new THREE.Vector3(0, 3, -42),
  },
  {
    progress: 0.94,
    position: new THREE.Vector3(-12, 7, -48),
    lookAt: new THREE.Vector3(8, 2, -58),
  },
  {
    progress: 1,
    position: new THREE.Vector3(-18, 9, -62),
    lookAt: new THREE.Vector3(14, 2, -78),
  },
]

export function sampleCameraPath(progress: number): {
  position: THREE.Vector3
  lookAt: THREE.Vector3
} {
  const p = THREE.MathUtils.clamp(progress, 0, 1)
  let i = 0
  while (i < cameraKeyframes.length - 1 && cameraKeyframes[i + 1].progress <= p) {
    i++
  }

  const current = cameraKeyframes[i]
  const next = cameraKeyframes[Math.min(i + 1, cameraKeyframes.length - 1)]
  const span = next.progress - current.progress || 1
  const t = THREE.MathUtils.smoothstep((p - current.progress) / span, 0, 1)

  return {
    position: current.position.clone().lerp(next.position, t),
    lookAt: current.lookAt.clone().lerp(next.lookAt, t),
  }
}

export function truckOffset(progress: number): number {
  const start = 0.78
  if (progress <= start) return 0
  const t = THREE.MathUtils.smoothstep((progress - start) / (1 - start), 0, 1)
  return t * 38
}
