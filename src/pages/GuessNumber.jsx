import { useRef, useState } from "react"
import './guessnumber.css'
import winPicture from "../assets/ivo-voit.png"
import orgPicture from "../assets/ivo.png"

function GuessNumber() {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) +1)
    const [message, setMessage] = useState()
    const [points, setpoints] = useState(100)
    const [score, setScore] = useState(0)

    const numberRef = useRef()
    
    const sisesta = () => {
        if (numberRef.current.value > number) {
            setMessage("Äi, äi. Nönna palju küll mette!")
            setpoints(points - 10)
        }
        else if (numberRef.current.value < number) {
            setMessage("Äi oo. Vähe, mes vähe!")
            setpoints(points - 10)
        }
        else {
            setMessage("Kena! Öige nummer!")
            setScore(score + points)
        }
        numberRef.current.value = ""
    }

    const newGame = () => {
        setNumber(Math.floor(Math.random() * 100) +1)
        setMessage()
        setpoints(100)
    }


  return (
    <div>
        <div>{number}</div>
        <div>Skoor: {score}</div>
        <div>Punktid: {points}</div>
        {message === "Kena! Öige nummer!" && <button onClick={newGame}>Uus mäng</button>} <br />
        {message === "Kena! Öige nummer!" && <img className="win-picture" src={winPicture} alt="" />}
        <div>{message}</div>
        {message !== "Kena! Öige nummer!" && 
        (<>
            <div>Arva nummer 1st 100ni</div><br />
            <img className="org-picture" src={orgPicture} /> <br />
            <input ref={numberRef}type="number" /><br />
            <button onClick={sisesta}>Sisesta</button>
        </>
        )}
    </div>
  )
}

export default GuessNumber