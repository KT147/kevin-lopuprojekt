import { Route, Routes } from 'react-router-dom'
import './App.css'
import GuessNumber from './pages/GuessNumber'
import HomePage from './pages/HomePage'
import MemoryGame from './pages/MemoryGame'
import RockPaperScissors from './pages/RockPaperScissors'
import InterestingFact from './pages/InterestingFact'

function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/guess-number" exact element={<GuessNumber/>}/>
        <Route path="/memory-game" exact element={<MemoryGame/>}/>
        <Route path="/rock-paper-scissors" exact element={<RockPaperScissors/>}/>
        <Route path="/facts" exact element={<InterestingFact/>}/>
     </Routes>
    </>
  )
}

export default App
