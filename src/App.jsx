import { Header, Game } from './components';
import { fetchPokemon, formatPokemon } from './scripts'
import { useState } from 'react'
import './styles/style.css'


async function initApp() {
  let storedScore = localStorage.getItem('storedScore');
  if (storedScore === null) {
    localStorage.setItem('storedScore', '0');
  }

  let storedPokemon = localStorage.getItem('storedPokemon');
  if (storedPokemon === null) {
    const pokemonData = await fetchPokemon(50);
    localStorage.setItem('storedPokemon', JSON.stringify(formatPokemon(pokemonData)));

    console.log('Fetched and stored a new set of Pokemon')
  }
}

function App() {
  initApp()
  const storedPokemon = JSON.parse(localStorage.getItem('storedPokemon'))
  const storedScore = localStorage.getItem('storedScore')
  const [highScore, setHighScore] = useState(storedScore)

  function handleSetHighScore(number) {
    localStorage.setItem('highScore', number)
    setHighScore(number)
  }


  return (
    <>
      <Header highScore={highScore}/>
      <Game setHighScore={handleSetHighScore} pokemon={storedPokemon}/>
    </>
  )
}

export default App

