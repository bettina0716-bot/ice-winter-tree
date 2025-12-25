import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const Snowfall = () => {
  const ref = useRef<any>()
  const sphere = useMemo(() => {
    const arr = new Float32Array(3000)
    for (let i = 0; i < 3000; i++) {
      // 这里的范围必须扩大，否则雪花会聚成一团看不见
      arr[i] = (Math.random() - 0.5) * 25
    }
    return arr
  }, [])

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 10
      ref.current.rotation.x += delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}
