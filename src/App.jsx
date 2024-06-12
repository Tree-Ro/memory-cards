import { Header, Game } from './components';
import { useState } from 'react'
import './styles/style.css'


function App() {
  const [highScore, setHighScore] = useState(0)

  return (
    <>
      <Header highScore={highScore}/>
      <Game setHighScore={setHighScore}/>
    </>
  )
}

export default App

