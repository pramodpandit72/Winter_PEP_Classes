import React, { useRef, useState } from 'react'

const UseRef = () => {

    const countRef = useRef(0);

    function handleClick() {
        countRef.current++;
        console.log(countRef.current);
    }

    console.log("Renders only one")

  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseRef



// import React, { useRef } from 'react'

// const UseRef = () => {

//     const inputRef = useRef(NULL);


//     function handlefocus() {
//         inputRef.current.focus()
//     }

//   return (
//     <div>
//         <input ref={inputRef} />
//         <button onClick={handlefocus}>Focus</button>
//     </div>
//   )
// }

// export default UseRef