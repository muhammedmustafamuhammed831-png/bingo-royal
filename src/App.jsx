import { useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG4cUcG04E1f2moCnmEwG1UiUwHdHuUrs",
  authDomain: "konkan-fc43e.firebaseapp.com",
  projectId: "konkan-fc43e",
  storageBucket: "konkan-fc43e.firebasestorage.app",
  messagingSenderId: "707049357885",
  appId: "1:707049357885:web:f0dab6834d2c4600846054",
  measurementId: "G-E0Y2RRPVKX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [players, setPlayers] = useState([]);
  const [joined, setJoined] = useState(false);

  const createRoom = async () => {
    if (!name) return alert("Enter your name");

    const code = Math.floor(1000 + Math.random() * 9000).toString();

    await setDoc(doc(db, "rooms", code), {
      players: [name],
      createdAt: Date.now(),
    });

    setRoomCode(code);
    setJoined(true);

    listenRoom(code);
  };

  const joinRoom = async () => {
    if (!name || !roomCode) {
      return alert("Fill all fields");
    }

    const roomRef = doc(db, "rooms", roomCode);

    const roomSnap = await getDoc(roomRef);

    if (!roomSnap.exists()) {
      return alert("Room not found");
    }

    await updateDoc(roomRef, {
      players: arrayUnion(name),
    });

    setJoined(true);

    listenRoom(roomCode);
  };

  const listenRoom = (code) => {
    const roomRef = doc(db, "rooms", code);

    onSnapshot(roomRef, (docSnap) => {
      if (docSnap.exists()) {
        setPlayers(docSnap.data().players || []);
      }
    });
  };

  if (joined) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "darkgreen",
          color: "white",
          padding: "30px",
          fontFamily: "Arial",
        }}
      >
        <h1>🃏 Konkan Online</h1>

        <h2>Room: {roomCode}</h2>

        <h3>Players:</h3>

        {players.map((player, index) => (
          <div
            key={index}
            style={{
              background: "white",
              color: "black",
              padding: "12px",
              borderRadius: "10px",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            👤 {player}
          </div>
        ))}
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
