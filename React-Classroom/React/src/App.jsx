import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MoodSwitcher from './projects/MoodSwitcher'
import ColorChange from './projects/ColorChange'
import CharCounter from './projects/CharCounter'
import DarkLightMode from './projects/DarkLightMode'
import RandomTheme from './projects/RandomTheme'
import Number from './projects/Number'
import Counter from './projects/Counter'
import ArrayRendering from './components/ArrayRendering'
import ToDo from './projects/ToDo'

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
      {/* <Counter /> */}
      {/* <ArrayRendering /> */}
      <ToDo /> 
        
    </div>
  )
}

export default App