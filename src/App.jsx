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
        deck.push({
          value,
          suit,
          text: value + suit,
        });
      }
    }

    return deck.sort(() => Math.random() - 0.5);
  };

  const firstDeck = createDeck();

  const startCard = firstDeck[0];

  const [deck, setDeck] = useState(firstDeck.slice(15));

  const [playerCards, setPlayerCards] = useState(
    firstDeck.slice(1, 15)
  );

  const [playedCard, setPlayedCard] = useState(startCard);

  const [message, setMessage] = useState("");

  const drawCard = () => {
    if (deck.length === 0) {
      setMessage("No cards left");
      return;
    }

    const newDeck = [...deck];

    const newCard = newDeck.pop();

    setDeck(newDeck);

    setPlayerCards([...playerCards, newCard]);

    setMessage("You drew a card");
  };

  const playCard = (card, index) => {
    const sameSuit = card.suit === playedCard.suit;

    const sameValue = card.value === playedCard.value;

    if (sameSuit || sameValue) {
      setPlayedCard(card);

      setPlayerCards(
        playerCards.filter((_, i) => i !== index)
      );

      setMessage("Card Played ✅");

      if (playerCards.length === 1) {
        setMessage("YOU WIN 🎉");
      }
    } else {
      setMessage("Wrong Card ❌");
    }
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

      <h2 style={{ fontSize: 35 }}>
        Cards Left: {deck.length}
      </h2>

      <button
        onClick={drawCard}
        style={{
          padding: 20,
          fontSize: 30,
          borderRadius: 15,
          background: "yellow",
          fontWeight: "bold",
          border: "none",
          marginBottom: 20,
        }}
      >
        Draw Card
      </button>

      <h2>{message}</h2>

      <h2
        style={{
          marginTop: 30,
          fontSize: 40,
        }}
      >
        Played Card
      </h2>

      <div
        style={{
          background: "white",
          color: "black",
          width: 140,
          height: 190,
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50,
          fontWeight: "bold",
          marginBottom: 40,
        }}
      >
        {playedCard.text}
      </div>

      <h2 style={{ fontSize: 40 }}>
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
            onClick={() => playCard(card, index)}
            style={{
              background: "white",
              color: "black",
              height: 180,
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 45,
              fontWeight: "bold",
            }}
          >
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}
