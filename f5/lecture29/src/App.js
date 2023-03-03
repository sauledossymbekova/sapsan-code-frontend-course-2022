import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [openedCardNumber, setOpenedCard] = useState()

  return (
    <div className="App">
      <Card isOpened={ openedCardNumber === 1 ? true : false} onCardClick={()=> setOpenedCard(1)}/>
      <Card isOpened={ openedCardNumber === 2} onCardClick={()=> setOpenedCard(2)}/>
    </div>
  );
}

export default App;
