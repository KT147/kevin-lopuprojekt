import React, { useState } from 'react'
import "./interestingfact.css"

function InterestingFact() {

    const [fact, setFact] = useState("")
    const [joke, setJoke] = useState("")
    const [isFact, setIsFact] = useState(true)

    const fetchNewFact = () => {
        fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then (res => res.json())
        .then (json => setFact(json.text))
        setIsFact(true)
    }

    const fetchNewJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then (res => res.json())
        .then (json => setJoke(json.value))
        setIsFact(false)
    }

  return (
    <div>
        <button onClick={fetchNewFact}>Vajuta siia ja õpi</button>
        <button onClick={fetchNewJoke}>Vajuta siia ja saad naerda</button>
        <div className='background'>
          <div className='text'>
          {isFact ? fact : joke}
          </div>
        </div>
    </div>
  )
}

export default InterestingFact