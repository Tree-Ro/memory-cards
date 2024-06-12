import pokeIcon from '../assets/pokeball.png' 

export const Header = function({ highScore }) {

  return (
    <header>
      <div className='title' >
        <h1>
          <span className='title-first-word'>Poke</span>
          Memory
        </h1>
        <img src={pokeIcon} alt="" />
      </div>
      <div className='high-score'>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  )
}