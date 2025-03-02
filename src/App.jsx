import { Route, Routes } from 'react-router-dom'
import './App.css'
import GuessNumber from './pages/GuessNumber'
import HomePage from './pages/HomePage'
import MemoryGame from './pages/MemoryGame'
import RockPaperScissors from './pages/RockPaperScissors'
import InterestingFact from './pages/InterestingFact'
import HangMan from './pages/HangMan'
import MathGame from './pages/MathGame'

function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/guess-number" exact element={<GuessNumber/>}/>
        <Route path="/memory-game" exact element={<MemoryGame/>}/>
        <Route path="/rock-paper-scissors" exact element={<RockPaperScissors/>}/>
        <Route path="/hangman" exact element={<HangMan/>}/>
        <Route path="/math-game" exact element={<MathGame/>}/>
        <Route path="/facts" exact element={<InterestingFact/>}/>
     </Routes>
    </>
  )
}

export default App
