import { v4 as uuidv4 } from 'uuid';

export const formatPokemon = function (pokemonData) {
  const formattedPokemon = pokemonData.map((pokemon) => {
    return {
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
      id: uuidv4(),
    };
  });

  return formattedPokemon;
};
