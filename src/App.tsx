import { Canvas } from '@react-three/fiber'
import { Experience } from '../components/Experience'
import { UIOverlay } from '../components/UIOverlay'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#020617' }}>
      <UIOverlay /> 
      <Canvas shadows camera={{ position: [15, 15, 15], fov: 30 }}>
        <color attach="background" args={['#020617']} />
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
