import { Route, Routes } from 'react-router-dom'
import './App.css'
import GuessNumber from './pages/GuessNumber'
import HomePage from './pages/HomePage'
import MemoryGame from './pages/MemoryGame'

function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/guess-number" exact element={<GuessNumber/>}/>
        <Route path="/memory-game" exact element={<MemoryGame/>}/>
     </Routes>
    </>
  )
}

export default App
