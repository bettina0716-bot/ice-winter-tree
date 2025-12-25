import { useMemo } from 'react'
import * as THREE from 'three'

export const Polaroids = () => {
  const polaroids = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    position: [Math.sin(i * 1.5) * 3, i * 0.8 - 2.5, Math.cos(i * 1.5) * 3],
    rotation: [0, -i * 1.5, 0],
  })), [])

  return (
    <group>
      {polaroids.map((p, i) => (
        <group key={i} position={p.position as any} rotation={p.rotation as any}>
          <mesh>
            <boxGeometry args={[1, 1.2, 0.05]} />
            <meshStandardMaterial color="#F8FAFC" metalness={0.5} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.1, 0.03]}>
            <planeGeometry args={[0.85, 0.85]} />
            <meshStandardMaterial color="#CBD5E1" transparent opacity={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
