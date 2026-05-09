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
      fontWeight: 'bold'
    }}>
      <span>{value}</span>
      <span style={{ fontSize: '30px', textAlign: 'center' }}>{suit}</span>
      <span style={{ textAlign: 'right' }}>{value}</span>
    </div>
  )
}

function App() {
  return (
    <div style={{
      background:'#071a07',
      color:'white',
      minHeight:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      fontFamily:'sans-serif'
    }}>

      <h1>🃏 Konkan</h1>

      <p>Kurdish Online Card Game</p>

      <div style={{
        display:'flex',
        gap:'20px',
        margin:'40px'
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
        fontSize:'20px'
      }}>
        ▶ Play Now
      </button>

    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
