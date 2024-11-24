import { useState, useEffect } from "react";

function UseEffectBasics() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    function sayHello() {
      console.log("hello there");
    }
    sayHello();
  }, []);

  return (
    <>
      <h1>Use Effect Basics</h1>

      <div>
        <h1>Value: {value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Click Me
        </button>
      </div>
    </>
  );
}

export default UseEffectBasics;
