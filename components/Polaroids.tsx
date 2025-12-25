import React from 'react'

export const Polaroids = () => {
  return (
    <group position={[0, 2, 0]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.2, 0.05]} />
        <meshStandardMaterial color="#F8FAFC" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  )
}
