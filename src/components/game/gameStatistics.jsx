export const GameStatistics = function({ currentScore, amountOfCards }) {
  return (
    <section className='score'>
      <p>Current Score: {currentScore}</p>
      <p>Amount of Cards: {amountOfCards}</p>
    </section>
  )
}