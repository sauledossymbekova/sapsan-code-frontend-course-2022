//   value = 0; BAD
//   setValue(1); OKAY

import { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(0);

  function plus() {
    setValue(value + 1);
  }

  function minus() {
    if (value > 0) {
      setValue(value - 1);
    } else {
        console.error('Your value = 0, so it is impossible to decrement')
    }
  }

  console.log(value);

  return (
    <>
      <h1>Value:{value}</h1>
      <button onClick={plus}>Add</button>
      <button onClick={minus}>Minus</button>
    </>
  );
};

export default Counter;
