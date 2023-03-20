import "./App.css";
import { LangContext } from "./context";
import { Main } from "./components/Main";
import { useContext, useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [lang, setLang] = useState("kk");
  // const handleLangChange
  return (
    <div className="App">
      <LangContext.Provider value={lang}>
        {/* <button onClick={() => setLang("ru")}>change Lang</button> */}
        <Header changeLang={() => setLang("ru")} />
        <Main />
      </LangContext.Provider>
    </div>
  );
}

// UserContext + useState renderProps

export default App;
