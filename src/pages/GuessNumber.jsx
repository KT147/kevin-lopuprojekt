import { useRef, useState } from "react"

function GuessNumber() {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) +1)
    const [message, setMessage] = useState()
    const [points, setpoints] = useState(100)
    const [score, setScore] = useState(0)

    const numberRef = useRef()
    
    const sisesta = () => {
        if (numberRef.current.value > number) {
            setMessage("Äi oo. Liiga palju!")
            setpoints(points - 10)
        }
        else if (numberRef.current.value < number) {
            setMessage("Äi, äi. Liiga vähe!")
            setpoints(points - 10)
        }
        else {
            setMessage("Ojaa! Öige nummer!")
            setScore(score + points)
        }
        numberRef.current.value = ""
    }

    const newGame = () => {
        setNumber(Math.floor(Math.random() * 10) +1)
        setMessage()
        setpoints(100)
        numberRef.current.value = ""
    }


  return (
    <div>
        <div>Skoor: {score}</div>
        <div>Punktid: {points}</div>
        {message === "Ojaa! Öige nummer!" && <button onClick={newGame}>Uus mäng</button>}
        <div>{message}</div>
        <div>{number}</div>
        <label>Arva number 1st 100ni</label><br />
        <input ref={numberRef}type="number" /><br />
        <button onClick={sisesta}>Sisesta</button>
    </div>
  )
}

export default GuessNumber