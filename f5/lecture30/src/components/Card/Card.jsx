import { useState } from "react";

export default function Card({ onCardClick, isOpened }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
    onCardClick()
  }

  return (
    <div className="card">
      <h1>Card Title</h1>
      <button onClick={handleClick}>Подробнее</button>

      {isOpened === true && collapsed && (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      )}
    </div>
  );
}
