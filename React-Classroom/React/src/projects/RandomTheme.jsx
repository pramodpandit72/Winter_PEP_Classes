import React, { useState } from "react";

const RandomTheme = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <div
      className="h-screen flex items-center justify-center" style={{ backgroundColor: color }}>
      <button
        onClick={() => setColor("#" + Math.floor(Math.random() * 16777215).toString(16))}
        className="bg-white px-6 py-2 rounded-xl">
        Change Color</button>
    </div>
  );
};

export default RandomTheme;