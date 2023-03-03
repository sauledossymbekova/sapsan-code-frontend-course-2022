import { useState } from "react";
import "../App.css";
import { Card } from "./Card";


function CardContainer() {
  const [collapsedCard, setCollapsedCard] = useState<number>();

  return (
    <>
      <div className="App">
        <Card isCollapsed={collapsedCard === 1} onCardClick={()=>setCollapsedCard(1)}/>
        <Card isCollapsed={collapsedCard === 2} onCardClick={()=>setCollapsedCard(2)}/>
      </div>
    </>
  );
}

export default CardContainer;

// {/* <button onClick={makeDark}>Mode</button> */}
