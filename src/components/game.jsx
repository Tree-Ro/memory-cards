import { useState } from 'react'
import { Cards } from '../components'
import { shuffleArray } from '../scripts'

export const Game = function({setHighScore, pokemon}) {
  const [amountOfCards, setAmountOfCards] = useState(6)
  const [clickedIds, setClickedIds] = useState([])
  const shuffledPokemon = shuffleArray(pokemon)
  
  function handleCardClick(id) {

    if (clickedIds.includes(id)) {
      setHighScore(clickedIds.length)
      setAmountOfCards(6)
      return
    }

    const newClickedIds = [...clickedIds, id]
    setClickedIds(newClickedIds)
  }

  const clickedPokemon = getClickedPokemon(shuffledPokemon, clickedIds)
  const nextRound = [...clickedPokemon, ...shuffledPokemon]
  const pokemonToRender = shuffleArray(nextRound.slice(0, amountOfCards))

  return (
    <section className='game-board'>
      <Cards pokemonToRender={pokemonToRender} handleClick={handleCardClick}/>
    </section>
  )
}

function getClickedPokemon(pokemon, arrayOfIds) {
  const result = pokemon.filter( (mon) => arrayOfIds.includes(mon.id) )
  
  return result;
}