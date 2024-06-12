export const formatPokemon = function (pokemonData, amount) {
  const shuffledPokemon = shuffle(pokemonData);
  const formattedPokemon = shuffledPokemon.map((pokemon) => {
    return {
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
    };
  });

  return formattedPokemon;
};

// https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
