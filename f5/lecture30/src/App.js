import "./App.css";
import { useState } from "react";
// import { CardContainer } from './components/Card/CardContainer';
import Header from "./components/Header";
import MyComponent from "./components/MyComponent";

function App() {
  const [language, setLanguage] = useState("ru");

  return (
    <div className="App">
      <Header onLangChange={(lang) => setLanguage(lang)} />
      <MyComponent
        title={language === "ru" ? "Добро Пожаловать" : "қош келдіңіздер"}
        description={language === "ru" ? "Этот сайт на русском" : "Бул сайт қазақша"}
      />
      {/* <CardContainer/> */}
    </div>
  );
}

export default App;
