export const Cards = function({ pokemonToRender, handleClick }) {

  function capitalise(word) {
    let newWord = word.split('')
    newWord[0] = newWord[0].toUpperCase()
    return newWord.join('')
  }

  return (
    <>
     {pokemonToRender && pokemonToRender.map((pokemon) => {
      return (
        <div className='card' onClick={() => handleClick(pokemon.id)} key={pokemon.id}>
          <img src={pokemon.sprite} alt="" />
          <p>{capitalise(pokemon.name)}</p>
        </div>
      )
     })}
    </>
  )
}