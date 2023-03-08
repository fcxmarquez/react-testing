import { useState } from "react";
import "./App.css";
import { ButtonForwardRef } from "./components/ButtonForwardRef";
import { Button } from "./components/Button";
import { createRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  const buttonForwardRef = createRef<HTMLButtonElement>();

  const buttonRef = createRef<HTMLButtonElement>();

  // Access the button elements with their refs
  const handleClick = () => {
    console.log(
      "buttonForwardRef value:",
      buttonForwardRef.current?.textContent
    );
    console.log("buttonRef value:", buttonRef.current?.textContent);
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Button onClick={handleClick} ref={buttonRef}>
        Click me
      </Button>
      <ButtonForwardRef onClick={handleClick} ref={buttonForwardRef}>
        Click me forward ref
      </ButtonForwardRef>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
