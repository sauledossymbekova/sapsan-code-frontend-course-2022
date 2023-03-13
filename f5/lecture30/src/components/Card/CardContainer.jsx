import { useState } from "react";
import Card from "./Card";

export const CardContainer = () => {
  const [openedCardNumber, setOpenedCard] = useState();

  return (
    <>
      <Card
        isOpened={openedCardNumber === 1 ? true : false}
        onCardClick={() => setOpenedCard(1)}
      />
      <Card
        isOpened={openedCardNumber === 2}
        onCardClick={() => setOpenedCard(2)}
      />
    </>
  );
};
