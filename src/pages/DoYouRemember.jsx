import React, { useState } from 'react'

function DoYouRemember() {

    const [started, setStarted] = useState(false)

    const [answers, setAnswers] = useState(["", "", "", "", ""])

    const [round, setRound] = useState(1)

    const [randomQuestion, setRandomQuestion] = useState(null)
    const [currentAnswer, setCurrentAnswer] = useState("")
    const [isQuestionAsked, setIsQuestionAsked] = useState(false)

    const startTheGame = () => {
       setStarted(true)
       setRound(1)
       localStorage.clear()
    }

    const handleInputChange = (index, value) => {
        const newAnswers = [...answers]
        newAnswers[index] = value
        setAnswers(newAnswers)
    }

    const enter = () => {
        if (answers.some(answer => answer === "")) {
            alert("Palun täida kõik väljad!")
            return
        }
        const startIndex = (round - 1) * 5
        answers.forEach((answer, index) => {
            localStorage.setItem(startIndex + index + 1, answer)
        })
        setAnswers(['', '', '', '', ''])

        const totalWords = round * 5
        const randomIndex = Math.floor(Math.random() * totalWords)
        setRandomQuestion(randomIndex)
        setIsQuestionAsked(true)
    }

    const handleQuestionSubmit = () => {
        const correctAnswer = localStorage.getItem(randomQuestion + 1)
        if (currentAnswer === correctAnswer) {
            alert("Õige!")
            setIsQuestionAsked(false)
            setRound(round + 1)
        } else {
            alert("Vale!")
            setStarted(false)
            setIsQuestionAsked(false)
            localStorage.clear()
        }
        setCurrentAnswer("")
    }
    
  return (
    <div>
      {started === false ? (
        <>
          <h3>Räägitakse, et poliitikud ei mäleta tihti, mida nad ütlevad või lubavad. Kas sa suudad oma sõnu meeles pidada?</h3>
          <div>Kirjuta 5 täiesti suvalist sõna ja siis arvuti kontrollib su mälu. Kui läbid kontrolli edukalt, liigud edasi uude vooru ja kirjutad järgmised 5 sõna. Sedasi kuni eksid.</div>
          <button onClick={startTheGame}>Olen valmis alustama</button>
        </>
      ) : isQuestionAsked === false ? (
        <>
          {answers.map((answer, index) => (
            <div key={index}>
                {index +1 + (round -1) * 5}
                <input type="text" value={answer} onChange={(e) => handleInputChange(index, e.target.value)} />
            </div>
          ))}
          <button onClick={enter}>Sisesta</button>
        </>
      ) : (
        <>
        <div>Mis oli sõna number {randomQuestion + 1}?</div>
        <input type="text" value={currentAnswer} onChange={(e) => setCurrentAnswer(e.target.value)} />
        <button onClick={handleQuestionSubmit}>Sisesta</button>
        </>
      )}
    </div>
  );
}

export default DoYouRemember