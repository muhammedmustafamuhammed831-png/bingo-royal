import React from 'react'
import ReactDOM from 'react-dom/client'

function Card({ suit, value }) {
  return (
    <div style={{
      width: '90px',
      height: '130px',
      background: 'white',
      borderRadius: '14px',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '10px',
      fontWeight: 'bold',
      boxShadow: '0 10px 20px rgba(0,0,0,0.4)'
    }}>
      <span>{value}</span>

      <span style={{
        fontSize: '30px',
        textAlign: 'center'
      }}>
        {suit}
      </span>

      <span style={{
        textAlign: 'right'
      }}>
        {value}
      </span>
    </div>
  )
}

function App() {
  return (
    <div style={{
      background:'#0b3d0b',
      color:'white',
      minHeight:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      fontFamily:'sans-serif'
    }}>

      <h1 style={{
        fontSize:'50px',
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

      <button style={{
        padding:'16px 40px',
        borderRadius:'18px',
        border:'none',
        background:'gold',
        color:'black',
        fontWeight:'bold',
        fontSize:'20px',
        cursor:'pointer'
      }}>
        ▶ Play Now
      </button>

    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
