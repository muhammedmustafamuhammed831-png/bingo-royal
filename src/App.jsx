import { useState } from "react";

export default function App() {
  const [players] = useState(["Player 1", "Player 2"]);

  const [cards, setCards] = useState([
    "🂡", "🂮", "🂭", "🂫",
    "🂱", "🂲", "🂳", "🂴"
  ]);

  const [selectedCard, setSelectedCard] = useState("");

  const playCard = (card) => {
    setSelectedCard(card);
    setCards(cards.filter((c) => c !== card));
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
      <h1 style={{ fontSize: "50px" }}>🃏 Konkan Online</h1>

      <h2>Room: 8119</h2>

      <h2>Players:</h2>

      {players.map((player, index) => (
        <div
          key={index}
          style={{
            background: "white",
            color: "black",
            padding: "15px",
            borderRadius: "15px",
            marginBottom: "10px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          👤 {player}
        </div>
      ))}

      <h2 style={{ marginTop: "30px" }}>Played Card:</h2>

      <div
        style={{
          background: "white",
          color: "black",
          width: "120px",
          height: "170px",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "70px",
          marginBottom: "30px",
        }}
      >
        {selectedCard || "🂠"}
      </div>

      <h2>Your Cards:</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => playCard(card)}
            style={{
              width: "90px",
              height: "140px",
              borderRadius: "15px",
              border: "none",
              fontSize: "50px",
              background: "white",
              cursor: "pointer",
            }}
          >
            {card}
          </button>
        ))}
      </div>
    </div>
  );
}
