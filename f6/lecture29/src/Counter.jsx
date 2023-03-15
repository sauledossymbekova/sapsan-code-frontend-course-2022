import "./Counter.css";
import { useState } from "react";

export const Counter = () => {
  // возвращает массив из двух элементов[],
  // 1 - какое то значение = состояние
  // 2 - какая та функция = управлять этим состоянием
//   const [myNumber, setMyNumber] = useState(0);

  const [myText, setMytext] = useState();
  const [result, setResult] = useState();

  function plus() {
    let a = Number(myText)
    // let a = + myText
    setResult(1 + a)
  }

  return (
    <>
      <div className="input-container">
        <input onChange={(event) => setMytext(event.target.value)} type="number"/>
        <button onClick={plus}>+</button>
        {/* <button onClick={() => setResult(myText)}>Покажи результат</button> */}
        <h2>{result}</h2>
        <button >=</button>

      </div>

      {/* <div className="container">
        <button>-</button>
        <h2>Счетчик: {myNumber}</h2>
        <button onClick={plus}>+</button>
      </div> */}
    </>
  );
};
