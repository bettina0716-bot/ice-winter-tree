import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

export const Snowfall = () => {
  const ref = useRef<any>()
  
  const sphere = useMemo(() => {
    const arr = new Float32Array(3000)
    for (let i = 0; i < 3000; i++) {
      arr[i] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame((state, delta) => {
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
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
