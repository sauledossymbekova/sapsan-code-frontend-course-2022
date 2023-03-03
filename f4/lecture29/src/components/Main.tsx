import { useState } from "react";
import "./App.css";
import { Banner } from "./Banner";
import { ModeButton } from "./ModeButton";

function Main() {
  const [isDark, setIsDark] = useState(false);
  const [text, setText] = useState("Hello World");

  const makeDark = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <div className="App">
        <ModeButton
          onModeClick={makeDark}
          onModeChange={(e: any) => setText(e.target.value)}
        />
        <h1>{text}</h1>
        <Banner isDark={isDark} text={text} />
      </div>
    </>
  );
}

export default Main;

// {/* <button onClick={makeDark}>Mode</button> */}
