import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { UIOverlay } from './components/UIOverlay'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#020617' }}>
      <UIOverlay /> 
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
