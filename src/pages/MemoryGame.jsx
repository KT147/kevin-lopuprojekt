import './memorygame.css'
import { useState } from "react"
import { useEffect } from "react"


function MemoryGame() {

    const shuffleCards = (cards) => {
        return cards.sort(() => Math.random() - 0.5)
      }

    const initialCards = [
        { id: 1, value: '🍎' }, { id: 2, value: '🍎' },
        { id: 3, value: '🍌' }, { id: 4, value: '🍌' },
        { id: 5, value: '🍇' }, { id: 6, value: '🍇' },
        { id: 7, value: '🍉' }, { id: 8, value: '🍉' },
        { id: 9, value: '🍋' }, { id: 10, value: '🍋' },
        { id: 11, value: '🍓' }, { id: 12, value: '🍓' }
      ]

    const [cards, setCards] = useState(shuffleCards([...initialCards]))
    const [flippedCards, setFlippedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
        return
    }
    
    const newFlippedCards = [...flippedCards, index]
        setFlippedCards(newFlippedCards)
    }

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstIndex, secondIndex] = flippedCards
            if (cards[firstIndex].value === cards[secondIndex].value) {
                setMatchedCards((prev) => [...prev, firstIndex, secondIndex])
            }

            setTimeout(() => {
                setFlippedCards([])
            }, 1000)
        }
    }, [flippedCards, cards])


    const newGame = () => {
        setCards(shuffleCards([...initialCards]))
        setMatchedCards([])
        setFlippedCards([])
    };
    
    
    

  return (
    <div className="memory-game-container">
       <div>Mälumäng</div>
       <div className="card-container">
        {cards.map((card, index) =>
            <div key={index} onClick={() => handleCardClick(index)} className={`card ${flippedCards.includes(index) || matchedCards.includes(index) ? 'flipped' : ''} ${matchedCards.includes(index) ? 'matched' : ''}`}>
                {flippedCards.includes(index) || matchedCards.includes(index) ? card.value : ""}
            </div>
        )}
       </div>
       <button onClick={newGame}>Uus mäng</button>
    </div>
  )
}

export default MemoryGame