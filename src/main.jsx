import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{
      background:'black',
      color:'white',
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    }}>
      <h1>🃏 Konkan</h1>
      <p>Kurdish Online Card Game</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
