import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";


function Main() {
  // type langType = 'ru' | 'kk' | 'en'
  const [lang, setLang] = useState("ru");

  const handleLangChange = (lang: string) => {
    setLang(lang);
  };

  return (
    <div className="App">
      <Header onLangChange={handleLangChange}/>
      <Banner lang={lang}/>
    </div>
  );
}

export default Main;
