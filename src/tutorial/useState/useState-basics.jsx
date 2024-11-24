import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <h2>useState Basics</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrease} className="btn">
        Increase
      </button>
      <button onClick={handleDecrease} className="btn">
        Decrease
      </button>
      <button onClick={handleReset} className="btn">
        Reset
      </button>
    </>
  );
};

export default ErrorExample;
