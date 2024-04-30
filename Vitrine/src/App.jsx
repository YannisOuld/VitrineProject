
import Parallax from './components/Parallax'
import BlurryCursor from './components/Cursor'
import Scene1 from './components/Scene1';
import Scene2 from './components/Scene2';
import { useState } from 'react';
import './App.css'

function App() {


  const [isActive, setIsActive] = useState(false);
  return (
    <div className='w-full h-full flex  flex-col justify-center text-center  m-auto '>
      <div className='w-full relative'>

        <Scene1 />
        <Scene2 />
      </div>
      <BlurryCursor isActive={isActive} />
      <Parallax onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} />
    </div>

  )
}

export default App
