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
import User from './components/User'
import Props from './components/Props'
import PropsPractice from './components/PropsPractice'
import PropsDrilling from './props/PropsDrilling'
import UseEffectBasics from './useEffect/UseEffectBasics'
import AutoCounter from './projects/AutoCounter'

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
      {/* <ToDo />  */}

      {/* <User name="Pramod" age={22} />
      <User name="Vikas" age={22} />
      <User name="Mukesh" age={22} /> */}

      {/* <Props /> */}
      {/* <PropsDrilling /> */}
      {/* <UseEffectBasics />   */}
      <AutoCounter />
        
    </div>
  )
}

export default App