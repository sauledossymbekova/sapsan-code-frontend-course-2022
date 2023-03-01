import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount(++count);
  }
  const handleMinusClick = () => {
    if (count > 0) {
      setCount(--count);
    }
  };

  console.log("you rendered me");

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handlePlusClick}>PLUS</button>
      <button onClick={handleMinusClick}>MINUS</button>
    </>
  );
};

export default Counter;

// function Counter(){

//     return(
//         <>
//         <p>My counter:</p>
//         </>
//     )
// }

// ++magicValue BAD

// function someFunction(){
//     let [count, setCount] = useState(5); // BAD
// }
