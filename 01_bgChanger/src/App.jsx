import { useState } from "react";
// import "./App.css";

function App() {
  const colorList = [
    {
      id: 1,
      color: "red",
    },
    {
      id: 2,
      color: "blue",
    },
    {
      id: 3,
      color: "purple",
    },
    {
      id: 4,
      color: "yellow",
    },
    {
      id: 5,
      color: "black",
    },
  ];
  return (
    <div className="bg-red-200 w-screen h-screen p-4">
      <div className="flex flex-wrap min-w-fit min-h-fit bg-slate-500	p-4 rounded-2xl gap-10">
        {colorList.map((item) => (
          <button className={`bg-${item.color}-600`}>{item.color}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
