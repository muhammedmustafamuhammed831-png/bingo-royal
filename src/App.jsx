export default function App() {
  return (
    <div style={{
      background: "green",
      minHeight: "100vh",
      color: "white",
      padding: "20px",
      fontFamily: "Arial"
    }}>
      <h1>🃏 Konkan Online</h1>

      <h2>Room: 8119</h2>

      <h3>Players:</h3>

      <div style={{
        background: "white",
        color: "black",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "10px"
      }}>
        👤 Player 1
      </div>

      <div style={{
        background: "white",
        color: "black",
        padding: "15px",
        borderRadius: "10px"
      }}>
        👤 Player 2
      </div>

      <button style={{
        marginTop: "30px",
        padding: "15px",
        width: "100%",
        fontSize: "20px",
        borderRadius: "10px",
        border: "none",
        background: "yellow",
        fontWeight: "bold"
      }}>
        Start Game
      </button>
    </div>
  );
}
