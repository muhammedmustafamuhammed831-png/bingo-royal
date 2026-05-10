import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function Card({ suit, value }) {
  return (
    <div style={{
      width:'90px',
      height:'130px',
      background:'white',
      borderRadius:'18px',
      color:'black',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      padding:'10px',
      fontWeight:'bold',
      boxShadow:'0 15px 30px rgba(0,0,0,0.5)'
    }}>
      <span>{value}</span>

      <span style={{
        fontSize:'34px',
        textAlign:'center'
      }}>
        {suit}
      </span>

      <span style={{
        textAlign:'right'
      }}>
        {value}
      </span>
    </div>
  )
}

function Lobby({ onStart }) {
  const [roomCode] = useState(
    Math.random().toString(36).substring(2,7).toUpperCase()
  )

  const [joinCode, setJoinCode] = useState('')

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      width:'100%',
      maxWidth:'450px'
    }}>

      <h1 style={{
        fontSize:'64px',
        marginBottom:'10px'
      }}>
        🃏 Konkan
      </h1>

      <p style={{
        color:'#ddd',
        marginBottom:'40px'
      }}>
        Kurdish Online Card Game
      </p>

      <div style={{
        display:'flex',
        gap:'20px',
        marginBottom:'40px'
      }}>
        <Card suit="♠️" value="Q" />
        <Card suit="♦️" value="K" />
        <Card suit="♥️" value="A" />
      </div>

      <div style={{
        background:'#111',
        padding:'25px',
        borderRadius:'20px',
        width:'100%',
        textAlign:'center',
        marginBottom:'30px'
      }}>
        <h2>🎮 Room Code</h2>

        <div style={{
          fontSize:'42px',
          color:'gold',
          letterSpacing:'6px',
          marginTop:'15px'
        }}>
          {roomCode}
        </div>
      </div>

      <input
        value={joinCode}
        onChange={(e) => setJoinCode(e.target.value)}
        placeholder="Enter Room Code"
        style={{
          width:'100%',
          padding:'18px',
          borderRadius:'16px',
          border:'none',
          marginBottom:'20px',
          fontSize:'18px'
        }}
      />

      <button
        style={{
          width:'100%',
          padding:'18px',
          borderRadius:'18px',
          border:'none',
          background:'#2196f3',
          color:'white',
          fontWeight:'bold',
          fontSize:'20px',
          marginBottom:'20px',
          cursor:'pointer'
        }}
      >
        👥 Join Room
      </button>

      <button
        onClick={onStart}
        style={{
          width:'100%',
          padding:'20px',
          borderRadius:'18px',
          border:'none',
          background:'gold',
          color:'black',
          fontWeight:'bold',
          fontSize:'24px',
          cursor:'pointer'
        }}
      >
        ▶ Start Game
      </button>

    </div>
  )
}

function GameTable() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      gap:'30px'
    }}>

      <h1>🔥 Game Started</h1>

      <div style={{
        display:'flex',
        gap:'20px'
      }}>
        <Card suit="♣️" value="10" />
        <Card suit="♥️" value="A" />
        <Card suit="♠️" value="K" />
      </div>

      <p>Players Connected: 2</p>

    </div>
  )
}

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div style={{
      background:'#0b3d0b',
      minHeight:'100vh',
      color:'white',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      padding:'20px',
      fontFamily:'sans-serif'
    }}>
      {
        started
          ? <GameTable />
          : <Lobby onStart={() => setStarted(true)} />
      }
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
