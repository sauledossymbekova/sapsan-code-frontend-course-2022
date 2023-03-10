import { useEffect, useState } from "react";
import "../App.css";
import { Card } from "./Card";


function CardContainer() {
  const [collapsedCard, setCollapsedCard] = useState<number>();

  const handleCardClick = (cardIndex: number) => {
    setCollapsedCard(cardIndex)
  }

  return (
    <>
      <div className="App">
        <Card isActive={collapsedCard === 1} onCardClick={handleCardClick} cardIndex={1}/>
        <Card isActive={collapsedCard === 2} onCardClick={handleCardClick} cardIndex={2}/>
      </div>
    </>
  );
}

export default CardContainer;

// {/* <button onClick={makeDark}>Mode</button> */}
