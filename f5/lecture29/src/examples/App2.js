import { useState } from "react";
import "./App.css";

import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState(false); // isDark = true => значит страница в темных тонах
  
  const [isKaz, setIsKaz] = useState(false);

  const [language, setLanguage] = useState('ru') // ru kk

  return (
    <div className="App">
      <Header onLangChange={()=> setIsKaz(!isKaz)} onButtonClick={() => setIsDark(!isDark)}/>


      {/* <button onClick={() => setIsDark(!isDark)}>Mode</button> */}
      <div
        style={isDark ? { background: "black" } : { background: "white" }}
        className="block"
      >
        <h1 style={isDark ? { color: "white" } : { color: "black" }}>
          {isKaz ? 'қош келдіңіздер!' : 'Добро Пожаловать!'}
        </h1>
        <p style={isDark ? { color: "white" } : { color: "black" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default App;
