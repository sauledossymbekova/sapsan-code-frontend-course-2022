import { useState } from "react";

export default function Card({onCardClick, isOpened}) {

  return (
    <div className="card">
      <h1>Card Title</h1>
      <button onClick={onCardClick}>Подробнее</button>

      {isOpened === true && (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      )}
    </div>
  );
}
