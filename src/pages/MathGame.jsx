import React, { useState, useEffect } from 'react'
import "./mathgame.css"

function MathGame() {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-"]

    const [randomNumberOne, setRandomNumberOne] = useState(null)
    const [randomNumberTwo, setRandomNumberTwo] = useState(null)

    const [randomOperation, setRandomOperation] = useState('')

    const [enterResult, setEnterResult] = useState("")

    const [message, setMessage] = useState()

    const [seconds, setSeconds] = useState(10)
    const [intervalId, setIntervalId] = useState(null)

    const [points, setPoints] = useState(100)
    const [score, setScore] = useState(0)

    const [level, setLevel] = useState(1)

    useEffect(() => {
        if (score >= 300) {
            setLevel(2)
        } else {
            setLevel(1)
        }
    }, [score])

    useEffect(() => {
        generateNewMath()
      }, [])

    useEffect(() => {
        if (seconds > 0) {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1)
                setPoints (points - 10)
            }, 1000)
            setIntervalId(interval) 
            
            return () => clearInterval(interval)
        } else {
            setMessage("Aeg läbi! -50 punkti!" )
            clearInterval(intervalId)
            setScore(prevScore => Math.max(0, prevScore - 50))
        }
    }, [seconds]) 

    const setRandomOperationBasedOnScore = () => {
        if (level === 2) {
            const operations = ['+', '-', '*']
            return operations[Math.floor(Math.random() * operations.length)]
        }
        const operations = ['+', '-']
        return operations[Math.floor(Math.random() * operations.length)]
    }

    const generateNewMath = () => {
        setRandomNumberOne(Math.floor(Math.random() * 1000))
        setRandomNumberTwo(Math.floor(Math.random() * 100))

        setRandomOperation(setRandomOperationBasedOnScore())
        setEnterResult("")
        setMessage("")
        setSeconds(10)
        clearInterval(intervalId)
        setPoints(100)
    }

    const enter = (number) => {
        setEnterResult(prev => prev + number)
    }

    const check = () => {
        let correctAnswer
        switch (randomOperation) {
            case '+':
                correctAnswer = randomNumberOne + randomNumberTwo;
                break;
            case '-':
                correctAnswer = randomNumberOne - randomNumberTwo;
                break;
            case '*':
                correctAnswer = randomNumberOne * randomNumberTwo;
                break;
        }
        clearInterval(intervalId)

        if (parseInt(enterResult) === correctAnswer) {
            setMessage("Õige vastus!")
            setScore(prevScore => prevScore + points)
            setPoints(100)
          } else {
            setMessage(`Vale vastus! -50 punkti! Õige vastus on: ${correctAnswer}`)
            setScore(prevScore => Math.max(0, prevScore - 50))
            setPoints(100)
          }
    }

  return (
    <div className='math-game'>
        <h2>TASE {level}</h2>
        <div className='math-game-info'>Skoor {score}</div>
        <div className='math-game-info-seconds'>Aega järel {seconds} sekundit</div>
        <br />
       <div className='calculation'>{randomNumberOne}{randomOperation}{randomNumberTwo} = 
       {enterResult}</div>
       <div className='button-container'>
            {numbers.map(number=>
            <button className='answer-buttons' onClick={() => enter (number)} key={number}>{number}</button>
            )}
        <button className='check-button' onClick={check}>Kontrolli</button>
        </div>
        <div className='math-game-info'>{message}</div>
        <div className='math-game-info'>Punktid {points}</div>
        <button className='new-game-button' onClick={generateNewMath}>Uus tehe</button>
    </div>
  )
}

export default MathGame