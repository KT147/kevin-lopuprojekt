import rockPicture from '../assets/rock.png'
import paperPicture from '../assets/paper.png'
import scissorsPicture from '../assets/scissors.png'
import './rockpaperscissors.css'
import { useState } from 'react'

function RockPaperScissors() {

    const [picture, setPicture] = useState()
    const [computersMove, setComputersMove] = useState()
    const [winner, setWinner] = useState()
    const [playersScore, setPlayersScore] = useState(0)
    const [computersScore, setComputersScore] = useState(0)

    const getImage = (move) => {
       if (move === "rock") return rockPicture
       if (move === "paper") return paperPicture
       if (move === "scissors") return scissorsPicture
       setPicture(move)
       setComputersMove(randomSelection)
    }

    const randomSelection = () => {
        const moves = ["rock", "paper", "scissors"]
        const randomMove = moves[Math.floor(Math.random() * moves.length)]
        setComputersMove(getImage(randomMove))
        return randomMove
    }

    const determineWinner = (playerMove, computerMove) => {
        if (playerMove === computerMove) {
            setWinner("Viik!")
        } else if (
            (playerMove === "rock" && computerMove === "scissors") ||
            (playerMove === "paper" && computerMove === "rock") ||
            (playerMove === "scissors" && computerMove === "paper")
        ) {
            setWinner("Sina võitsid!")
            setPlayersScore(playersScore + 1)
        } else {
            setWinner("Arvuti võitis!")
            setComputersScore(computersScore + 1)
        }
    }

    const handleMove = (playersMove) => {
        setPicture(getImage(playersMove))
        const computerMove = randomSelection()
        determineWinner(playersMove, computerMove)
    }


    
  return (
    <div className='game'>
        <div className='you'>
            <div className='your-move'>Sinu käik:</div>
            <button onClick={() => handleMove("rock")}>Kivi</button>
            <button onClick={() => handleMove("paper")}>Paber</button>
            <button onClick={() => handleMove("scissors")}>Käärid</button>
            <br /> <br />
            <img className='move' src={picture} />
        </div>
        <div className='computer'>
            <div className='info'>Arvuti:</div>
            <br /><br /><br /><br />
            <img className='move' src={computersMove} />
        </div>
        <h1>{winner}</h1>
        <span className='info'>Sina: {playersScore}</span>
        <br />
        <span className='info'>Arvuti: {computersScore}</span>
    </div>
  )
}

export default RockPaperScissors