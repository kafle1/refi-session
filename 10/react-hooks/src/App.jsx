import { useState } from "react";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      You have clicked: {count}
      <button onClick={handleClick} > Click me</button>
      <Form />
    </div>
  );
}

export default App;
