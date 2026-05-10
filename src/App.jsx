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

    for (let x = 0; x < 2; x++) {
      for (let suit of suits) {
        for (let value of values) {
          deck.push({
            value,
            suit,
            text: value + suit,
          });
        }
      }
    }

    return deck.sort(() => Math.random() - 0.5);
  };

  const startGame = () => {
    const shuffled = createDeck();

    const startCard = shuffled[0];

    setPlayedCard(startCard);

    setPlayerCards(shuffled.slice(1, 15));

    setBotCards(shuffled.slice(15, 29));

    setDeck(shuffled.slice(29));

    setTurn("player");

    setMessage("Game Started 🎮");
  };

  const [deck, setDeck] = useState([]);

  const [playerCards, setPlayerCards] = useState([]);

  const [botCards, setBotCards] = useState([]);

  const [playedCard, setPlayedCard] = useState(null);

  const [message, setMessage] = useState("Press Start Game");

  const [turn, setTurn] = useState("player");

  const canPlay = (card) => {
    return (
      card.suit === playedCard.suit ||
      card.value === playedCard.value
    );
  };

  const drawCard = () => {
    if (turn !== "player") return;

    if (deck.length === 0) {
      setMessage("No cards left");
      return;
    }

    const newDeck = [...deck];

    const card = newDeck.pop();

    setDeck(newDeck);

    setPlayerCards([...playerCards, card]);

    setTurn("bot");

    setMessage("Bot Turn");
  };

  const playCard = (card, index) => {
    if (turn !== "player") return;

    if (!canPlay(card)) {
      setMessage("Wrong Card ❌");
      return;
    }

    setPlayedCard(card);

    const newCards = playerCards.filter(
      (_, i) => i !== index
    );

    setPlayerCards(newCards);

    if (newCards.length === 0) {
      setMessage("YOU WIN 🎉");
      return;
    }

    setTurn("bot");

    setMessage("Bot Turn");
  };

  const botPlay = () => {
    if (turn !== "bot") return;

    let played = false;

    for (let i = 0; i < botCards.length; i++) {
      if (canPlay(botCards[i])) {
        const card = botCards[i];

        setPlayedCard(card);

        const newBot = botCards.filter(
          (_, index) => index !== i
        );

        setBotCards(newBot);

        played = true;

        if (newBot.length === 0) {
          setMessage("BOT WINS 🤖");
          return;
        }

        break;
      }
    }

    if (!played && deck.length > 0) {
      const newDeck = [...deck];

      const card = newDeck.pop();

      setDeck(newDeck);

      setBotCards([...botCards, card]);
    }

    setTurn("player");

    setMessage("Your Turn");
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
      <h1 style={{ fontSize: 45 }}>
        🃏 Konkan Online
      </h1>

      <button
        onClick={startGame}
        style={{
          padding: 15,
          fontSize: 25,
          borderRadius: 15,
          background: "yellow",
          border: "none",
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Start Game
      </button>

      {turn === "bot" && (
        <button
          onClick={botPlay}
          style={{
            padding: 15,
            fontSize: 25,
            borderRadius: 15,
            background: "orange",
            border: "none",
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Bot Play
        </button>
      )}

      <h2>{message}</h2>

      <h2>Cards Left: {deck.length}</h2>

      <button
        onClick={drawCard}
        style={{
          padding: 15,
          fontSize: 25,
          borderRadius: 15,
          background: "white",
          border: "none",
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Draw Card
      </button>

      <h2>Bot Cards: {botCards.length}</h2>

      <h2>Played Card</h2>

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
          fontSize: 45,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        {playedCard ? playedCard.text : "🂠"}
      </div>

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
            onClick={() => playCard(card, index)}
            style={{
              background: "white",
              color: "black",
              height: 170,
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 40,
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
