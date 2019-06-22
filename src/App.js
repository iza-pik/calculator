import React, { useState } from "react";
import "./App.css";
import Keyboard from "./components/keyboard";
import Display from "./components/display";
import { handleKeyPress } from "./utils";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  // handleKeyPress();

  return (
    <div className="App">
      <Display displayValue={displayValue} />
      <Keyboard
        displayValue={displayValue}
        onKeyPress={handleKeyPress(displayValue, setDisplayValue)}
      />
    </div>
  );
}

export default App;
