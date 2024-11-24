import { useState } from "react";

function UseStateObject() {
  // old code before refactor
  //
  // const [name, setName] = useState("Ben");
  // const [age, setAge] = useState("41");
  // const [hobby, setHobby] = useState("Computers");
  //
  const [person, setPerson] = useState({
    name: "Ben",
    age: "41",
    hobby: "computers",
  });

  function DisplayPerson() {
    //  old code before refactor
    //   setName("Jemma");
    //   setAge("47");
    //   setHobby("sleeping");
    setPerson({
      name: "Jemma",
      age: "47",
      hobby: "Sleeping",
    });
  }
  return (
    <>
      <h2>Use State Object</h2>
      <div>
        <h3>{person.name}</h3>
        <h1>{person.age}</h1>
        <h3>{person.hobby}</h3>
        <button className="btn" onClick={DisplayPerson}>
          Show Jemma
        </button>
      </div>
    </>
  );
}

export default UseStateObject;
