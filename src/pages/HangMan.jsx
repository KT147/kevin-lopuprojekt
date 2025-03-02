import { useState } from 'react'
import { useEffect } from 'react'
import wordsJSON from '../data/words.json'

function HangMan() {
  const [word, setWord] = useState('')
  const [correctGuesses, setCorrectGuesses] = useState([])
  const [wrongGuesses, setWrongGuesses] = useState([])

  useEffect(() => {
    getRandomWord()
  }, [])

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsJSON.length)
    setWord(wordsJSON[randomIndex].toUpperCase())
    setCorrectGuesses([])
    setWrongGuesses([])
  }

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'Z', 'Ž', 'T', 'U', 'V', 'Õ', 'Ä', 'Ö', 'Ü', 'X', 'Y']

  const handleGuess = (letter) => {
    if (word.includes(letter)) {
      setCorrectGuesses([...correctGuesses, letter])
    } else {
      setWrongGuesses([...wrongGuesses, letter])
    }
  }

  const displayWord = () => {
    return word.split('').map((letter) => (
      correctGuesses.includes(letter) ? letter : '_'
    )).join(' ')
  }

  const checkWin = () => {
    return word.split('').every(letter => correctGuesses.includes(letter))
  }

  if (checkWin()) {
    return (
      <div>
        <h2>Õige! Sõna oli: {word}</h2>
        <button onClick={getRandomWord}>Uus mäng</button>
      </div>
    )
  }

  if (wrongGuesses.length >= 6) {
    return (
      <div>
        <h2>Liiga palju eksimusi! Sõna oli: {word}</h2>
        <button onClick={getRandomWord}>Uus mäng</button>
      </div>
    )
  }


  return (
    <div>
      <div>{displayWord()}</div>
      <div>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={correctGuesses.includes(letter) || wrongGuesses.includes(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <br /><br />
      <button onClick={getRandomWord}>Uus mäng</button>
      <div>
        <h3>Valed pakkumised (max.6): {wrongGuesses.join(', ')}</h3>
      </div>
    </div>
  )
}

export default HangMan;
