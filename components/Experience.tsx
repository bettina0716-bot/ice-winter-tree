import { Stars, Float, OrbitControls } from '@react-three/drei'
import { TreeStar } from './TreeStar'
import { Foliage } from './Foliage'
import { Ornaments } from './Ornaments'

export const Experience = () => {
  return (
    <>
      {/* 极地深蓝背景色 */}
      <color attach="background" args={['#020617']} />
      
      {/* 寒冷夜空的繁星 */}
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />
      
      {/* 核心：冰蓝色环境光 */}
      <ambientLight intensity={0.5} color="#E0F2FE" />
      
      {/* 侧面点光源，增加冰晶反射 */}
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#BAE6FD" />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[0, -2, 0]}>
          <TreeStar />
          <Foliage />
          <Ornaments />
        </group>
      </Float>

      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} />
    </>
  )
}
