import { useState , useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  const startTimer = () => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if(prev>0){
          return prev-1;
        }
        else{
          clearInterval(timer);
          console.log("Interval is stopped")
          return 0;
        }
      })
    }, 1000)
  }
  return (
    <>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
      <button onClick={startTimer}>Start</button>
      <div>
        {count}
      </div>
    </>
  );
}

export default App;
