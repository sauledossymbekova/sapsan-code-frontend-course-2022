import { useState } from "react";

function Counter() {
  // return = render (ваш хтмл часть, разметка, рендер, отрисовка)
  const [value, setValue] = useState("Saule");

  const [number, setNumber] = useState(1);
  // 1 => нажимаете на кнопку => 10 => 100 => 1000

  const divide = () => {
    setNumber(number / 10);
  };

  return (
    <>
      <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number * 10)}>x10</button>
        <button onClick={divide}>/10</button>
      </div>
      {/* <h1>{value}</h1>
      <button onClick={() => setValue("Alina")}>Поменяй имя</button> */}
    </>
  );
}

export default Counter;
