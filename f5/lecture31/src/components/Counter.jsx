import { useEffect } from "react";
import { useState } from "react";

export const Counter = () => {
  // const [count, setCount] = useState(0);
  const [text, setText] = useState(' ');

  const [showText, setShowText] = useState(false);
  // componentDidMount + componentDidUpdate = будет выполняться при любом изменении состояние компоненты
  // useEffect(() => console.log("effected"));

  // componentDidMount = только один раз выполниться когда компонента первый раз рендерится
  // useEffect(() => console.log("effected"), []); 

  // componentDidMount + componentDidUpdate НО только если поменялся text 
  // = будет выполняться при  изменении состояние text 
  useEffect(() => {
    console.log('you clicked button')
    console.log('you changed showText value')
    console.log("effected")
    setText('')
    
  }, [showText]); 

  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}>
        <strong>+</strong>
      </button>
      <h1>{count}</h1> */}

      <input onChange={e => setText(e.target.value)}/>
      <button onClick={() => setShowText(true)}>Click me</button>
      {/* // кнопка */}
      {showText === true && <h2>{text}</h2>}
    </>
  );
};
