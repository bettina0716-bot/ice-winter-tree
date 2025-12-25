import { Canvas } from '@react-three/fiber'
import { Experience } from '../components/Experience'
import { UIOverlay } from '../components/UIOverlay'
// 必须添加这两个导入
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#020617' }}>
      <UIOverlay /> 
      <Canvas shadows camera={{ position: [15, 15, 15], fov: 30 }}>
        <color attach="background" args={['#020617']} />
        <Experience />
        {/* 让蓝色亮起来的关键 */}
        <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0.2} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default App
