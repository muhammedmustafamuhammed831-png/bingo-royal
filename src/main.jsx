import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function Card({ suit, value }) {
  return (
    <div style={{
      width:'90px',
      height:'130px',
      background:'white',
      borderRadius:'14px',
      color:'black',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      padding:'10px',
      fontWeight:'bold',
      boxShadow:'0 10px 20px rgba(0,0,0,0.5)'
    }}>
      <span>{value}</span>

      <span style={{
        fontSize:'30px',
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
    Math.random().toString(36).substring(2, 7).toUpperCase()
  )

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      gap:'20px'
    }}>

      <h1 style={{
        fontSize:'50px'
      }}>
        🃏 Konkan
      </h1>

      <p>Kurdish Online Card Game</p>

      <div style={{
        display:'flex',
        gap:'20px',
        margin:'30px'
      }}>
        <Card suit="♠️" value="Q" />
        <Card suit="♦️" value="K" />
        <Card suit="♥️" value="A" />
      </div>

      <div style={{
        background:'#111',
        padding:'20px',
        borderRadius:'14px',
        width:'300px',
        textAlign:'center'
      }}>
        <h2>🎮 Room Code</h2>

        <div style={{
          fontSize:'32px',
          color:'gold',
          marginTop:'10px',
          letterSpacing:'4px'
        }}>
          {roomCode}
        </div>
      </div>

      <button
        onClick={onStart}
        style={{
          padding:'16px 40px',
          borderRadius:'18px',
          border:'none',
          background:'gold',
          color:'black',
          fontWeight:'bold',
          fontSize:'20px',
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

      <h1
