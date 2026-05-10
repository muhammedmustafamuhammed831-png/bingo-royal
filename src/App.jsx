import { useState } from 'react'

export default function App() {
  const [roomCode, setRoomCode] = useState('')

  function createRoom() {
    const code = Math.random().toString(36).substring(2, 7).toUpperCase()
    setRoomCode(code)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'darkgreen',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>🃏 Konkan</h1>

      <h2>🎮 Room Code</h2>

      <div style={{
        background: 'black',
        padding: '20px',
        borderRadius: '20px',
        fontSize: '40px',
        color: 'gold',
        marginBottom: '20px'
      }}>
        {roomCode || '-----'}
      </div>

      <button
        onClick={createRoom}
        style={{
          padding: '15px 30px',
          fontSize: '20px',
          borderRadius: '15px',
          background: 'gold',
          border: 'none'
        }}
      >
        Create Room
      </button>
    </div>
  )
}
