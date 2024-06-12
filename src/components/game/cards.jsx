export const Cards = function({ amount, setOfPokemon }) {

  return (
    <>
     {setOfPokemon && setOfPokemon.map((pokemon) => {
      return (
        console.log(pokemon)
      )
     })}
    </>
  )
}