import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function Card({ suit, value, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
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
        boxShadow:'0 15px 30px rgba(0,0,0,0.5)',
        cursor:'pointer',
        transition:'0.2s',
      }}
    >
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

function GameTable() {

  const [playerCards, setPlayerCards] = useState([
    { suit:'♠️', value:'Q' },
    { suit:'♦️', value:'K' },
    { suit:'♥️', value:'A' },
    { suit:'♣️', value:'10' }
  ])

  const [tableCards, setTableCards] = useState([])

  const playCard = (index) => {

    const selected = playerCards[index]

    setTableCards([...tableCards, selected])

    const newCards = [...playerCards]
    newCards.splice(index, 1)

    setPlayerCards(newCards)
  }

  return (
    <div style={{
      width:'100%',
      minHeight:'100vh',
      background:'#0b3d0b',
      color:'white',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      padding:'20px',
      fontFamily:'sans-serif'
    }}>

      <h1 style={{
        fontSize:'50px'
      }}>
        🃏 Konkan
      </h1>

      <h2 style={{
        marginTop:'20px'
      }}>
        🎮 Game Table
      </h2>

      <div style={{
        marginTop:'40px',
        minHeight:'160px',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        flexWrap:'wrap'
      }}>
        {
          tableCards.map((card, index) => (
            <Card
              key={index}
              suit={card.suit}
              value={card.value}
            />
          ))
        }
      </div>

      <h3 style={{
        marginTop:'40px'
      }}>
        Your Cards
      </h3>

      <div style={{
        display:'flex',
        gap:'20px',
        marginTop:'20px',
        flexWrap:'wrap',
        justifyContent:'center'
      }}>
        {
          playerCards.map((card, index) => (
            <Card
              key={index}
              suit={card.suit}
              value={card.value}
              onClick={() => playCard(index)}
            />
          ))
        }
      </div>

      {
        playerCards.length === 0 && (
          <h1 style={{
            marginTop:'50px',
            color:'gold'
          }}>
            🏆 You Win!
          </h1>
        )
      }

    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<GameTable />)
