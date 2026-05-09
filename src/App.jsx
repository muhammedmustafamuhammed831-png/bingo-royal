export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: 'sans-serif'
    }}>
      <h1>🃏 Konkan</h1>
      <p>Kurdish Online Card Game</p>
      <button style={{
        padding: '15px 30px',
        borderRadius: '15px',
        border: 'none',
        background: 'gold',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Play Now
      </button>
    </div>
  )
}
