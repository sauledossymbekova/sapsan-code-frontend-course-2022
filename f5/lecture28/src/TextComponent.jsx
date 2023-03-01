import { useState } from "react";

const TextComponent = () => {
  const [text, setText] = useState("Default Text");

  function mySomeFunction(something) {
    setText(something.target.value);
  }

  return (
    <>
      <input onChange={mySomeFunction} />
      <h1> {text}</h1>
    </>
  );
};

export default TextComponent;
