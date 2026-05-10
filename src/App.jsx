import { useState } from "react";

export default function App() {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const createDeck = () => {
    let deck = [];

    for (let suit of suits) {
      for (let value of values) {
        deck.push(value + suit);
      }
    }

    return deck.sort(() => Math.random() - 0.5);
  };

  const [deck, setDeck] = useState(createDeck());

  const [playerCards, setPlayerCards] = useState(deck.slice(0, 14));

  const [playedCard, setPlayedCard] = useState(deck[20]);

  const drawCard = () => {
    if (deck.length === 0) return;

    const newCard = deck[playerCards.length + 1];

    setPlayerCards([...playerCards, newCard]);
  };

  const playCard = (card) => {
    setPlayedCard(card);

    setPlayerCards(playerCards.filter((c) => c !== card));
  };

  return (
    <div
      style={{
        background: "green",
        minHeight: "100vh",
        padding: 20,
        color: "white",
      }}
    >
      <h1>🃏 Konkan Online</h1>

      <h2>Cards Left: {52 - playerCards.length}</h2>

      <button
        onClick={drawCard}
        style={{
          padding: 15,
          fontSize: 20,
          borderRadius: 10,
          marginBottom: 20,
          background: "yellow",
          fontWeight: "bold",
        }}
      >
        Draw Card
      </button>

      <h2>Your Cards ({playerCards.length})</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 15,
        }}
      >
        {playerCards.map((card, index) => (
          <div
            key={index}
            onClick={() => playCard(card)}
            style={{
              background: "white",
              color: "black",
              height: 140,
              borderRadius: 15,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            {card}
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 40 }}>Played Card</h2>

      <div
        style={{
          background: "white",
          color: "black",
          width: 120,
          height: 170,
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        {playedCard}
      </div>
    </div>
  );
}
