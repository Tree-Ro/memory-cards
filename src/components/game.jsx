import { useState } from 'react'
import { Cards, GameStatistics } from '../components'
import { shuffleArray } from '../scripts'

export const Game = function({setHighScore, pokemon}) {

  const [amountOfCards, setAmountOfCards] = useState(6)
  const [clickedIds, setClickedIds] = useState([])
  const shuffledPokemon = shuffleArray(pokemon)
  
  function handleCardClick(id) {
    if (clickedIds.includes(id)) {      
      setHighScore(clickedIds.length)
      setClickedIds([])
      setAmountOfCards(6)
      return
    }

    const newClickedIds = [...clickedIds, id]
    setClickedIds(newClickedIds)
  }


  if (clickedIds.length >= amountOfCards) {
    setAmountOfCards(clickedIds.length + 6)
  }

  const clickedPokemon = getClickedPokemon(shuffledPokemon, clickedIds)
  const nonClickedPokemon = getNonClickedPokemon(shuffledPokemon, clickedIds)
  const nextRound = [...clickedPokemon, ...nonClickedPokemon]
  const pokemonToRender = shuffleArray(nextRound.slice(0, amountOfCards))

  return (
    <>
      <GameStatistics currentScore={clickedIds.length} amountOfCards={amountOfCards} />
      <section className='game-board'>
        <Cards pokemonToRender={pokemonToRender} handleClick={handleCardClick}/>
      </section>
    </>
  )
}

function getClickedPokemon(pokemon, arrayOfIds) {
  const result = pokemon.filter( (mon) => arrayOfIds.includes(mon.id) )
  
  return result;
}

function getNonClickedPokemon(pokemon, arrayOfIds) {
  const result = pokemon.filter( (mon) => !arrayOfIds.includes(mon.id) )
  
  return result;
}