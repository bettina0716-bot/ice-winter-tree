import { Canvas } from '@react-three/fiber'
import { Experience } from '../components/Experience' // 必须是 ../ 代表去外面一层找
import { UIOverlay } from '../components/UIOverlay'   // 必须是 ../

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
