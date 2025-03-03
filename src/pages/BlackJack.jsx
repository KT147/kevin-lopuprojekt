import { useState } from "react"

function BlackJack() {
  const [deck, setDeck] = useState([])
  const [playerHand, setPlayerHand] = useState([])
  const [dealerHand, setDealerHand] = useState([])

  const createDeck = () => {
    const suits = ['♠', '♥', '♦', '♣']
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    const deck = []
    for (let suit of suits) {
      for (let value of values) {
        deck.push({ suit, value })
      }
    }
    return deck
  }

  // Fisher Yates'i segamisalgorütm
  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]]
    }
    return deck
  }

  const startNewGame = () => {
    const newDeck = shuffleDeck(createDeck())
    setDeck(newDeck)
    setPlayerHand([newDeck.pop(), newDeck.pop()])
    setDealerHand([newDeck.pop(), newDeck.pop()])
  }
//.pop eemaldab ja tagastab massiivi viimasest elemendist

  const hitPlayer = () => {
    if (deck.length > 0) {
      const newCard = deck.pop()
      const newPlayerHand = [...playerHand, newCard]
      setPlayerHand(newPlayerHand)
      setDeck([...deck])

      

      const playerTotal = calculateHandValue(newPlayerHand)
      if (playerTotal > 21) {
        alert("Mängija kaotas (ületas 21)")
      }
    }
  };

  const calculateHandValue = (hand) => {
    let value = 0
    let aces = 0

    for (let card of hand) {
      if (card.value === 'A') {
        aces += 1
        value += 11
      } else if (['K', 'Q', 'J'].includes(card.value)) {
        value += 10
      } else {
        value += parseInt(card.value)
      }
    }

    while (value > 21 && aces > 0) {
      value -= 10
      aces -= 1
    }

    return value
  }

  const stand = () => {
    let dealerTotal = calculateHandValue(dealerHand)
    let updatedDeck = [...deck]
    const newDealerHand = [...dealerHand]
  
    while (dealerTotal < 17 && updatedDeck.length > 0) {
      const newCard = updatedDeck.pop()
      newDealerHand.push(newCard)
      dealerTotal = calculateHandValue(newDealerHand)
      setDeck(updatedDeck)
      setDealerHand(newDealerHand)
    }
  
    const playerTotal = calculateHandValue(playerHand)
  
    if (playerTotal > 21) {
      alert("Mängija kaotas (ületas 21)")
    } else if (dealerTotal > 21) {
      alert("Diiler kaotas (ületas 21)")
    } else if (playerTotal > dealerTotal) {
      alert("Mängija võitis!")
    } else if (playerTotal < dealerTotal) {
      alert("Diiler võitis!")
    } else {
      alert("Viik!")
    }
  };
  

  return (
    <div>
      <div>Mängija kaardid: {playerHand.map(card => `${card.value}${card.suit}`).join(', ')}</div>
      <div>Diileri kaardid: {dealerHand.map(card => `${card.value}${card.suit}`).join(', ')}</div>
      <button onClick={hitPlayer}>Juurde</button><br />
      <button onClick={stand}>Jääb</button><br />
      <button onClick={startNewGame}>Uus mäng</button>
    </div>
  );
}

export default BlackJack;
