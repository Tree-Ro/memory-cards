import { Header, Game } from './components';
import { fetchPokemon, formatPokemon } from './scripts'
import { useState, useEffect } from 'react'
import './styles/style.css'

function App() {
  const [pokemonLoaded, setPokemonLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let storedScore = localStorage.getItem('storedScore');
      if (storedScore === null) {
        localStorage.setItem('storedScore', '0');
      }

      let storedPokemon = localStorage.getItem('storedPokemon');
      if (storedPokemon === null) {
        const pokemonData = await fetchPokemon(75);
        localStorage.setItem('storedPokemon', JSON.stringify(formatPokemon(pokemonData)));

        console.log('Fetched and stored a new set of Pokemon');
      }
      setPokemonLoaded(true); // Set pokemonLoaded to true once data is fetched
    };

    fetchData();

  }, []);

  const storedPokemon = JSON.parse(localStorage.getItem('storedPokemon'))
  const storedScore = localStorage.getItem('storedScore')
  const [highScore, setHighScore] = useState(storedScore)

  function handleSetHighScore(number) {
    if (number > localStorage.getItem('storedScore')) {
      localStorage.setItem('storedScore', number)
      setHighScore(number)
    }
  }

  // Render components only if pokemonLoaded is true
  return (
    <>
      {pokemonLoaded && storedPokemon ? (
        <>
          <Header highScore={highScore} />
          <Game setHighScore={handleSetHighScore} pokemon={storedPokemon} />
        </>
      ) : null}
    </>
  );
}

export default App;
