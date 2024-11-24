import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setTimeout(() => {
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 3000);
  }
  return (
    <>
      <h2>useState Set Time Out</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrease} className="btn">
        Increase
      </button>
    </>
  );
};

export default ErrorExample;
