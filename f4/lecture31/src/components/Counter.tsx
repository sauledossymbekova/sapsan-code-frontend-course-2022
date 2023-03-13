import { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(" ");

  // componentDidMount + componentDidUpdate = будет выполняться при любом изменении состояние компоненты
  //   useEffect(() => console.log("effected"));

  // componentDidMount = только один раз выполниться когда компонента первый раз рендерится
  // useEffect(() => console.log("effected"), []); 

  useEffect(() => console.log("effected"), [text]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        <strong>+</strong>
      </button>
      <h1>{count}</h1>

      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={()=>{}}>Add</button>
      <h1>{text}</h1>
    </>
  );
};
