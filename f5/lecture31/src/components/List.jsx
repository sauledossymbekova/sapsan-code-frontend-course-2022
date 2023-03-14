import { useEffect } from "react";
import { useState } from "react";

export const List = () => {
  const [users, setUsers] = useState(["Saule", "Assel", "Madina", "Aibolat"]);

  const [text, setText] = useState(" ");

  useEffect(() => {
    console.log('list of users is changed')
  }, [users])


  return (
    <>
      <h1>List of users:</h1>
      <input onChange={(e) => setText(e.target.value)} />

      <button onClick={() => setUsers([...users, text])}>Add new User</button>

      {users.map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
};
