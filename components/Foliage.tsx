export const Foliage = () => {
  return (
    <group>
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[0, i * 1.2, 0]}>
          <coneGeometry args={[3.5 - i * 0.5, 2.5, 8]} />
          <meshStandardMaterial color="#F8FAFC" roughness={0.8} />
        </mesh>
      ))}
    </group>
  )
}
