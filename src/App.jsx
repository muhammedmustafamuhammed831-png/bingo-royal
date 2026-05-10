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
          deck.push({
            suit,
            value,
            text: value + suit,
          });
        }
      }
    }

    deck.push({ value: "JOKER", suit: "🃏", text: "🃏" });
    deck.push({ value: "JOKER", suit: "🃏", text: "🃏" });

    return deck.sort(() => Math.random() - 0.5);
  };

  const [deck, setDeck] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [botCards, setBotCards] = useState([]);
  const [playedCard, setPlayedCard] = useState(null);
  const [message, setMessage] = useState("Press Start Game 🎮");
  const [turn, setTurn] = useState("player");
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timer <= 0 && turn === "player") {
      drawCard();
    }

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const startGame = () => {
    const shuffled = createDeck();

    setPlayedCard(shuffled[0]);

    setPlayerCards(shuffled.slice(1, 15));

    setBotCards(shuffled.slice(15, 29));

    setDeck(shuffled.slice(29));

    setTurn("player");

    setMessage("Your Turn 🔥");

    setTimer(15);

    setScore(0);
  };

  const canPlay = (card) => {
    if (card.value === "JOKER") return true;

    return (
      card.suit === playedCard.suit ||
      card.value === playedCard.value
    );
  };

  const drawCard = () => {
    if (deck.length === 0) return;

    const newDeck = [...deck];

    const card = newDeck.pop();

    setDeck(newDeck);

    setPlayerCards([...playerCards, card]);

    setTurn("bot");

    setMessage("Bot Turn 🤖");

    setTimer(15);
  };

  const playCard = (card, index) => {
    if (turn !== "player") return;

    if (!canPlay(card)) {
      setMessage("Wrong Card ❌");
      return;
    }

    setPlayedCard(card);

    const newCards = playerCards.filter((_, i) => i !== index);

    setPlayerCards(newCards);

    setScore(score + 10);

    if (newCards.length === 0) {
      setMessage("YOU WIN 🏆🔥");
      return;
    }

    setTurn("bot");

    setMessage("Bot Turn 🤖");

    setTimer(15);
  };

  const botPlay = () => {
    if (turn !== "bot") return;

    let played = false;

    for (let i = 0; i < botCards.length; i++) {
      if (canPlay(botCards[i])) {
        const card = botCards[i];

        setPlayedCard(card);

        const newBot = botCards.filter((_, idx) => idx !== i);

        setBotCards(newBot);

        played = true;

        if (newBot.length === 0) {
          setMessage("BOT WINS 🤖💀");
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

    setMessage("Your Turn 🔥");

    setTimer(15);
  };

  return (
    <div
      style={{
        background: "linear-gradient(green,darkgreen)",
        minHeight: "100vh",
        padding: 20,
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: 45 }}>
        🃏 KONKAN ULTIMATE
      </h1>

      <button
        onClick={startGame}
        style={{
          padding: 15,
          fontSize: 25,
          borderRadius: 15,
          background: "gold",
          border: "none",
          fontWeight: "bold",
          marginBottom: 15,
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

      <h2>⏰ Timer: {timer}</h2>

      <h2>🏆 Score: {score}</h2>

      <h2>🃏 Cards Left: {deck.length}</h2>

      <button
        onClick={drawCard}
        style={{
          padding: 15,
          fontSize: 22,
          borderRadius: 15,
          background: "white",
          border: "none",
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Draw Card
      </button>

      <h2>🤖 Bot Cards: {botCards.length}</h2>

      <h2>Played Card</h2>

      <div
        style={{
          background: "white",
          color: "black",
          width: 150,
          height: 210,
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50,
          fontWeight: "bold",
          marginBottom: 30,
          boxShadow: "0 0 20px black",
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
              cursor: "pointer",
              transition: "0.2s",
              boxShadow: "0 5px 15px black",
            }}
          >
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}
