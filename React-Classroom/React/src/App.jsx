import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MoodSwitcher from './projects/MoodSwitcher'
import ColorChange from './projects/ColorChange'
import CharCounter from './projects/CharCounter'
import DarkLightMode from './projects/DarkLightMode'
import RandomTheme from './projects/RandomTheme'
import Number from './projects/Number'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* className='bg-black h-screen w-full flex items-center justify-center text-white' */}

      {/* <ColorChange /> */}
      {/* <MoodSwitcher /> */}
      {/* <CharCounter /> */}
      {/* <DarkLightMode /> */}
      {/* <RandomTheme /> */}
      {/* <Number /> */}
        
    </div>
  )
}

export default App