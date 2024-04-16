import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Parallax from './components/Parallax'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div id="canvas-container">

      <Parallax />

    </div>

  )
}

export default App
