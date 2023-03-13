import { useState, useEffect } from "react";

export const List = () => {
  const [names, setNames] = useState(['Saule', 'Saya', 'Tayan']);
  const [text, setText] = useState(" ");

  const addNewName = () => {
    setNames([...names, text])
  }

  // const deleteTask
  // const makeTaskCompleted

  useEffect(() => console.log("effected"), [names]);

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={addNewName}>Add</button>
      {names.map((name)=> <h1>{name}</h1>)}
    </>
  );
};
