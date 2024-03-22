import React from "react";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <>
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <img src={card.src} alt="card-front" className="front" />
          <img
            onClick={handleClick}
            src="/images/cover.jpg"
            alt="card-back"
            className="back"
          />
        </div>
      </div>
    </>
  );
}
