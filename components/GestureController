import { useThree } from '@react-three/fiber'
import { useGesture } from '@use-gesture/react'

export const GestureController = () => {
  const { camera, gl } = useThree()
  
  // 识别捏合和拖拽手势
  useGesture({
    onPinch: ({ offset: [d] }) => {
      camera.position.z = Math.max(5, Math.min(25, 12 - d / 10))
    },
    onDrag: ({ offset: [x, y] }) => {
      camera.rotation.y += x / 1000
    }
  }, { target: gl.domElement })

  return null
}
