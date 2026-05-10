import { useEffect, useState } from "react";

export default function App() {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
    "A", "2", "3", "4", "5", "6", "7",
    "8", "9", "10", "J", "Q", "K"
  ];

  const createDeck = () => {
    let deck = [];

    for (let d = 0; d < 2; d++) {
      for (let suit of suits) {
        for (let value of values) {
          deck.push(`${value}${suit}`);
        }
      }
    }

    deck.push("🃏");
    deck.push("🃏");

    return deck;
  };

  const shuffleDeck = (deck) => {
    return [...deck].sort(() => Math.random() - 0.5);
  };

  const [deck, setDeck] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [playedCard, setPlayedCard] = useState("");

  useEffect(() => {
    const fullDeck = createDeck();
    const shuffled = shuffleDeck(fullDeck);

    setDeck(shuffled);
    setPlayerCards(shuffled.slice(0, 14));
  }, []);

  const playCard = (card) => {
    setPlayedCard(card);
    setPlayerCards(playerCards.filter((c) => c !== card));
  };

  return (
    <div
      style={{
        background: "green",
        minHeight: "100vh",
        padding: "20px",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1>🃏 Konkan Online</h1>

      <h2>Total Cards: {deck.length}</h2>

      <h2>Your Cards ({playerCards.length})</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        {playerCards.map((card, index) => (
          <button
            key={index}
            onClick={() => playCard(card)}
            style={{
              width: "80px",
              height: "120px",
              borderRadius: "12px",
              border: "none",
              background: "white",
              fontSize: "28px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {card}
          </button>
        ))}
      </div>

      <h2>Played Card</h2>

      <div
        style={{
          width: "120px",
          height: "170px",
          background: "white",
          color: "black",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        {playedCard || "🂠"}
      </div>
    </div>
  );
}
