import { useState } from 'react'
import { Cards } from '../components'

export const Game = function({setHighScore, setOfPokemon}) {


  return (
    <section className='game-board'>
      <Cards setOfPokemon={setOfPokemon} />
    </section>
  )
}