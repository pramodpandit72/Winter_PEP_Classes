import React, { useState } from 'react'

const Counter = () => {

    const [likes, setLikes] = useState(0);

    let message;

    if(likes === 0) {
        message = "Be the first to like 👍";
    } else if (likes < 5 && likes> 0) {
        message = "People Like this 🔥";
    } else if (likes < 0) {
        // message = "bad impression";
        setLikes(0);
    } else {
         message = "Trending Post 🚀";
    }

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
        <h1>👍 Likes: {likes} </h1>

        <button className='border-2 px-4 py-1 rounded' onClick={() => setLikes(likes + 1)}>Like</button>
        <button className='border-2 px-4 py-1 rounded' onClick={() => setLikes(likes - 1)}>Dislike</button>

        <h2>{message}</h2>
        {likes >= 10 && <h3>🎇 Viral Content</h3>}

    </div>
  )
}

export default Counter