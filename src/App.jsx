<h2>Players:</h2>

{players.map((player, index) => (
  <div key={index} className="player-card">
    👤 {player}
  </div>
))}

<button
  onClick={() => setGameStarted(true)}
  style={{
    width: "100%",
    padding: "15px",
    fontSize: "24px",
    fontWeight: "bold",
    background: "gold",
    border: "none",
    borderRadius: "15px",
    marginTop: "20px"
  }}
>
  Start Game
</button>
