import { useEffect, useState } from "react";

export default function App() {
  const suits = ["♠", "♥", "♦", "♣"];

  const values = [
    "A","2","3","4","5","6","7",
    "8","9","10","J","Q","K"
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

    deck.push({
      value: "JOKER",
      suit: "🃏",
      text: "🃏",
    });

    deck.push({
      value: "JOKER",
      suit: "🃏",
      text: "🃏",
    });

    return deck.sort(() => Math.random() - 0.5);
  };

  const [deck, setDeck] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [botCards, setBotCards] = useState([]);
  const [playedCard, setPlayedCard] = useState(null);
  const [message, setMessage] = useState("Press Start Game 🎮");
  const [turn, setTurn] = useState("player");
  const [timer, setTimer] = useState(20);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          if (turn === "player") {
            drawCard();
          }
          return 20;
        }

        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [turn, deck, playerCards]);

  const startGame = () => {
    const shuffled = createDeck();

    setPlayedCard(shuffled[0]);

    setPlayerCards(shuffled.slice(1, 15));

    setBotCards(shuffled.slice(15, 29));

    setDeck(shuffled.slice(29));

    setTurn("player");

    setMessage("Your Turn 🔥");

    setScore(0);

    setTimer(20);
  };

  const canPlay = (card) => {
    if (card.value === "JOKER") return true;

    return (
      card.suit === playedCard?.suit ||
      card.value === playedCard?.value
    );
  };

  const drawCard = () => {
    if (deck.length === 0) {
      setMessage("No cards left ❌");
      return;
    }

    const newDeck = [...deck];

    const card = newDeck.pop();

    setDeck(newDeck);

    setPlayerCards([...playerCards, card]);

    setTurn("bot");

    setMessage("Bot Turn 🤖");

    setTimer(20);
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

    setScore(score + 10);

    if (newCards.length === 0) {
      setMessage("YOU WIN 🏆🔥");
      return;
    }

    setTurn("bot");

    setMessage("Bot Turn 🤖");

    setTimer(20);
  };

  const botPlay = () => {
    if (turn !== "bot") return;

    let played = false;

    for (let i = 0; i < botCards.length; i++) {
      if (canPlay(botCards[i])) {
        const card = botCards[i];

        setPlayedCard(card);

        const newBot = botCards.filter(
          (_, idx) => idx !== i
        );

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

    setTimer(20);
  };

  return (
    <div
      style={{
        background: "linear-gradient(#0f2027,#203a43,#2c5364)",
        minHeight: "100vh",
        padding: 15,
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: 40,
        }}
      >
        🃏 KONKAN ULTIMATE
      </h1>

      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        <button
          onClick={startGame}
          style={{
            padding: 15,
            fontSize: 18,
            borderRadius: 15,
            background: "gold",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Start Game
        </button>

        {turn === "bot" && (
          <button
            onClick={botPlay}
            style={{
              padding: 15,
              fontSize: 18,
              borderRadius: 15,
              background: "orange",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Bot Play
          </button>
        )}

        <button
          onClick={drawCard}
          style={{
            padding: 15,
            fontSize: 18,
            borderRadius: 15,
            background: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Draw Card
        </button>
      </div>

      <h2>{message}</h2>

      <h3>⏰ Timer: {timer}</h3>

      <h3>🏆 Score: {score}</h3>

      <h3>🃏 Cards Left: {deck.length}</h3>

      <h3>🤖 Bot Cards: {botCards.length}</h3>

      <h2>Played Card</h2>

      <div
        style={{
          background: "white",
          color: "black",
          width: 120,
          height: 170,
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          fontWeight: "bold",
          marginBottom: 25,
          boxShadow: "0 0 20px black",
        }}
      >
        {playedCard ? playedCard.text : "🂠"}
      </div>

      <h2>Your Cards ({playerCards.length})</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 10,
        }}
      >
        {playerCards.map((card, index) => (
          <div
            key={index}
            onClick={() => playCard(card, index)}
            style={{
              background: "white",
              color: "black",
              height: 110,
              borderRadius: 15,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 28,
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 10px black",
            }}
          >
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}
