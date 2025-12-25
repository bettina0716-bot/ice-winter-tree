export const TreeStar = () => {
  return (
    <mesh position={[0, 7.5, 0]} rotation={[0, 0, Math.PI / 4]}>
      <octahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial color="#BAE6FD" emissive="#BAE6FD" emissiveIntensity={2} />
    </mesh>
  )
}
