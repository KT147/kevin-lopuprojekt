import React, { useState } from 'react'

function MathGame() {

    const numbers = ["-", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const randomNumberOne = Math.floor(Math.random() * 1000)
    const randomNumberTwo = Math.floor(Math.random() * 100)

    const [enterResult, setEnterResult] = useState("")

    const operations = ['+', '-', '*']
    const randomOperation = operations[Math.floor(Math.random() * operations.length)]

    const enter = (number) => {
        setEnterResult(prev => prev + number)
    }

  return (
    <div>
       {randomNumberOne}{randomOperation}{randomNumberTwo} = 
       {enterResult}
       <br />
        {numbers.map(number=>
            <button onClick={() => enter (number)} key={number}>{number}</button>
        )}
    </div>
  )
}

export default MathGame