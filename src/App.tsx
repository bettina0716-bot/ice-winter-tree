import { Canvas } from '@react-three/fiber'
import { Experience } from '../components/Experience'
import { UIOverlay } from '../components/UIOverlay'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#020617' }}>
      <UIOverlay /> 
      <Canvas 
        shadows 
        camera={{ position: [15, 15, 15], fov: 30 }}
        gl={{ antialias: false, depth: true }}
      >
        <color attach="background" args={['#020617']} />
        <Experience />
        
        {/* 让白色几何体变成冰蓝发光圣诞树的关键 */}
        <EffectComposer disableNormalPass>
          <Bloom 
            intensity={1.5} 
            luminanceThreshold={0.15} 
            mipmapBlur 
          />
          <Vignette offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default App
