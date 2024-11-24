import { useState, useEffect } from "react";

function UseEffectMultiple() {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    function valueChange() {
      console.log("Value has changed");
    }
    valueChange();
  }, [value]);

  useEffect(() => {
    function secondValueChange() {
      console.log("Second Value has changed");
    }
    secondValueChange();
  }, [secondValue]);

  return (
    <>
      <h1>Use Effect Basics</h1>

      <div>
        <h1>Value: {value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Click Me
        </button>
      </div>

      <div>
        <h1>Second Value: {secondValue}</h1>
        <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
          Click Me
        </button>
      </div>
    </>
  );
}

export default UseEffectMultiple;
