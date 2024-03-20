import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/images/image1.png" },
  { src: "/images/image2.png" },
  { src: "/images/image3.png" },
  { src: "/images/image4.png" },
  { src: "/images/image5.png" },
  { src: "/images/image6.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };
  //handle choice
  const handleChoice = (card) => {
    console.log(card);
  };

  return (
    <div className="App">
      <h2>My Sims Memory Game </h2>
      <button onClick={shuffleCards}> New Game </button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
