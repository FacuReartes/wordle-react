import React from 'react'

function Model({ isCorrect, turn, solution }) {
  return (
    <div className='model'>
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className='solution'>The solution is: <b>{solution}</b></p>
          <p>You found the solution in {turn} guesses</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You Lose</h1>
          <p className='solution'>The solution is: <b>{solution}</b></p>
          <p>Better luck next time</p>
        </div>
      )}
    </div>
  )
}

export default Model