import { Stars, Float, OrbitControls } from '@react-three/drei'
import { TreeStar } from './TreeStar'
import { Foliage } from './Foliage'
import { Ornaments } from './Ornaments'
import { Polaroids } from './Polaroids'
import { GestureController } from './GestureController'

export const Experience = () => {
  return (
    <>
      <color attach="background" args={['#020617']} />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />
      
      {/* 调好的冰蓝光效 */}
      <ambientLight intensity={0.5} color="#E0F2FE" />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#BAE6FD" />
      
      {/* 所有的互动逻辑全部加载 */}
      <GestureController />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[0, -2, 0]}>
          <TreeStar />
          <Foliage />
          <Ornaments />
          <Polaroids />
        </group>
      </Float>

      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} />
    </>
  )
}
