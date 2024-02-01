import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [buttonColors, setButtonColors] = useState('#ffffff');
  const incrementCount = () => {
    setCount((prev) => prev>=20 ? prev : prev+1);
  };

  const decrementCount = () => {
    setCount((prev) => prev==0 ? prev : prev-1);
  };

  const changeColor = () => {
    const colorCode = Math.floor(Math.random() * 16777215).toString(16);

    // Ensure the color code has six digits
    const newColorCode =  "#" + "0".repeat(6 - colorCode.length) + colorCode;
    console.log(newColorCode);
    setButtonColors(newColorCode);
  };

  return (
    <div className="counter_container">
      <div>
        <button style={{ backgroundColor: `${buttonColors}` }} onClick={incrementCount}>
          Add Value +
        </button>
        <span>{count}</span>
        <button style={{ backgroundColor: `${buttonColors}` }} onClick={decrementCount}>
          Subtract Value -
        </button>
      </div>
      <div>
        <button onClick={changeColor} style={{ backgroundColor: `${buttonColors}`}}>Change color</button>
      </div>
    </div>
  );
};

export default Counter;
