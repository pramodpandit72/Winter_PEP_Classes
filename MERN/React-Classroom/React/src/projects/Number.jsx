import React, { useState } from 'react'

const Number = () => {

    const [number] = useState(Math.floor(Math.random() * 5) + 1);

    const [guess, setGuess] = useState("");
    const [result, setResult] = useState(null);

    const checkGuess = () => {
        if(parseInt(guess) === number) {
            setResult("win");
        }else{
            setResult("loose")
        }
    }
 
  return (
    <div className='bg-gray-300'>

        <h1>Guess Number (1 - 5)</h1>
        <input type="number" onChange={(e) => setGuess(e.target.value)} className='border-2 m-4' />

        <button onClick={checkGuess} className='border-2 px-4 py-1 '>Check</button>

        {result && (
            <h2>
                {result === "win" ? "✔️ Correct" : "❌ wrong! Try Again"}
            </h2>
        )}

    </div>
  )
}

export default Number;
