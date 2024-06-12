export const Header = function({ highScore }) {


  return (
    <header>
      <div className='title' >
        <img src='../../assets/pokeball.png' alt="" />
        <h1>
          <span className='title-first-word'>Poke</span>
          Memory
        </h1>
      </div>
      <div className='high-score'>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  )
}