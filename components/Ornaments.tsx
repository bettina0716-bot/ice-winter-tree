import { useMemo } from 'react'
import * as THREE from 'three'

export const Ornaments = () => {
  const count = 40
  const colors = [
    new THREE.Color('#F0F9FF'), // 珍珠白
    new THREE.Color('#BAE6FD'), // 冰晶蓝
    new THREE.Color('#E2E8F0'), // 银灰色
  ]

  const ornaments = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [(Math.random() - 0.5) * 4, Math.random() * 8 - 4, (Math.random() - 0.5) * 4],
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: Math.random() * 0.12 + 0.08
    })).filter(d => {
        const r = ((8 - (d.position[1] + 4)) / 8) * 3
        const dist = Math.sqrt(d.position[0]**2 + d.position[2]**2)
        return dist < r
    })
  }, [])

  return (
    <group>
      {ornaments.map((orn, i) => (
        <mesh key={i} position={orn.position as any} scale={orn.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial 
            color={orn.color} 
            metalness={0.8} 
            roughness={0.1} 
            emissive={orn.color}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}
