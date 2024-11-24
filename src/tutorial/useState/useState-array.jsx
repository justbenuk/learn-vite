import { useState } from "react";
import { data } from "../../data.js";
function UseStateArray() {
  const INITIALSTATE = data;

  const [names, setNames] = useState(INITIALSTATE);

  function handleClear() {
    setNames([]);
  }

  function handleDelete(e) {
    const name = e.target.getAttribute("name");
    setNames((names) => names.filter((item) => item.name !== name));
  }

  return (
    <>
      <h2>Use State Array</h2>
      <ul>
        {names.map((item) => {
          return (
            <>
              <li key={item.id}>
                {item.name}
                <span name={item.name} onClick={handleDelete}>
                  {" "}
                  X
                </span>
              </li>
            </>
          );
        })}
      </ul>
      <button onClick={handleClear}>Clear List</button>
    </>
  );
}

export default UseStateArray;
