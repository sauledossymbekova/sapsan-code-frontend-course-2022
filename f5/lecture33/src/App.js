import "./App.css";
import { Main } from "./components/Main";

import { useState, createContext } from "react";

//LangContext
export const LanguageContext = createContext(null);

const theme = {
  light: {
    color: 'white',
    background: 'black',
    image: 'https://i.pinimg.com/originals/7a/0d/c2/7a0dc24f568b81a39ba1ce797f65d355.jpg'
  }
}

function App() {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={lang}>
      <div className="app">
      <button onClick={() => setLang('ru')}>RU</button>
      <button onClick={() => setLang('kk')}>KK</button>
      <button onClick={() => setLang('en')}>EN</button>
      <Main />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
