import { useState } from "react";
import "./App.css";
import Keypad from "./Keypad";

function App() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };
  const handleCalculate = () => {
    const outputVal = eval(input);
    setInput(outputVal);
  };

  return (
    <div className="container">
      <h1>calcular-app</h1>
      <input
        type="text"
        className="output"
        value={input}
        onClick={handleClick}
      />
      <Keypad
        handleClick={handleClick}
        handleClear={handleClear}
        handleCalculate={handleCalculate}
      />
    </div>
  );
}

export default App;
