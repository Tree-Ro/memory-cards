export const fetchPokemon = async function (amount) {
  if (amount > 100) return;
  const promises = [];

  for (let i = 1; i <= amount; i++) {
    promises.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, { mode: 'cors' })
        .then((response) => response.json())
        .catch((error) => console.error('Error Fetching: ' + error))
    );
  }
  const pokemonData = await Promise.all(promises);

  return pokemonData;
};
