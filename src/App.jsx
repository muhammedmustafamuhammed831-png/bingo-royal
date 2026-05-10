import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [joined, setJoined] = useState(false);

  const createRoom = () => {
    if (!name) {
      alert("Enter your name");
      return;
    }

    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    setRoomCode(randomCode);
    setJoined(true);
  };

  const joinRoom = () => {
    if (!name || !roomCode) {
      alert("Fill all fields");
      return;
    }

    setJoined(true);
  };

  if (joined) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "darkgreen",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "50px",
          fontFamily: "Arial",
        }}
      >
        <h1>🃏 Konkan Room</h1>

        <h2>Welcome {name}</h2>

        <h3>Room Code: {roomCode}</h3>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "170px",
              background: "white",
              borderRadius: "20px",
              color: "black",
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ♠️
          </div>

          <div
            style={{
              width: "120px",
              height: "170px",
              background: "white",
              borderRadius: "20px",
              color: "black",
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ❤️
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "darkgreen",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "320px",
          background: "#0b3d0b",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h1>🃏 Konkan</h1>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <input
          placeholder="Room Code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
          onClick={createRoom}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            border: "none",
            borderRadius: "12px",
            background: "gold",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Create Room
        </button>

        <button
          onClick={joinRoom}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "15px",
            border: "none",
            borderRadius: "12px",
            background: "white",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
