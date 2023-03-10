import { useState } from "react";
import "./Card.css";

interface Props {
  isActive: boolean;
  onCardClick: (cardIndex: number) => void;
  cardIndex: number;
}

export const Card = ({ isActive, onCardClick, cardIndex}: Props) => {
  const [isCollapsed, setCollapsed] = useState(false)

  const handleMoreClick = () => {
    setCollapsed(!isCollapsed)
    onCardClick(cardIndex)
  }

  return (
    <>
      <div className="card">
        <h1>Title</h1>
        {isActive && isCollapsed && <h2>Description</h2>}
        <button onClick={handleMoreClick}>More</button>
      </div>
    </>
  );
};
