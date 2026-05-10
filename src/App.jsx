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

  const firstDeck = createDeck();

  const [deck, setDeck] = useState(firstDeck.slice(14));

  const [playerCards, setPlayerCards] = useState(
    firstDeck.slice(0, 14)
  );

  const [playedCard, setPlayedCard] = useState("🂠");

  const drawCard = () => {
    if (deck.length === 0) return;

    const newDeck = [...deck];

    const newCard = newDeck.pop();

    setDeck(newDeck);

    setPlayerCards([...playerCards, newCard]);
  };

  const playCard = (card) => {
    setPlayedCard(card);

    setPlayerCards(
      playerCards.filter((c, index) => index !== playerCards.indexOf(card))
    );
  };

  return (
    <div
      style={{
        background: "green",
        minHeight: "100vh",
        padding: 20,
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: 50 }}>
        🃏 Konkan Online
      </h1>

      <h2 style={{ fontSize: 40 }}>
        Cards Left: {deck.length}
      </h2>

      <button
        onClick={drawCard}
        style={{
          padding: 20,
          fontSize: 35,
          borderRadius: 15,
          background: "yellow",
          fontWeight: "bold",
          marginBottom: 30,
          border: "none",
        }}
      >
        Draw Card
      </button>

      <h2 style={{ fontSize: 45 }}>
        Your Cards ({playerCards.length})
      </h2>

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
              height: 180,
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            {card}
          </div>
        ))}
      </div>

      <h2
        style={{
          marginTop: 40,
          fontSize: 45,
        }}
      >
        Played Card
      </h2>

      <div
        style={{
          background: "white",
          color: "black",
          width: 150,
          height: 200,
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 60,
          fontWeight: "bold",
          marginBottom: 40,
        }}
      >
        {playedCard}
      </div>
    </div>
  );
}
