import { useState } from "react";
import "./App.css";
import Banner from "./Banner";
import Header from "./Header";

function App() {
  const [lang, setLang] = useState("ru");

  const handleLangChange = (lang: string) => {
    setLang(lang);
  };

  return (
    <div className="App">
      <Banner lang={lang}/>
      <Header onLangChange={handleLangChange}/>
    </div>
  );
}

export default App;
