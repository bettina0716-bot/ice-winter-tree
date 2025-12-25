import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const Snowfall = () => {
  const ref = useRef<any>()
  const sphere = useMemo(() => {
    const arr = new Float32Array(3000)
    for (let i = 0; i < 3000; i++) {
      arr[i] = (Math.random() - 0.5) * 25
    }
    return arr
  }, [])

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 15
      ref.current.rotation.x += delta / 20
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.07}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}
