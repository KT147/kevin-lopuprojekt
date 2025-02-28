import React, { useState } from 'react'
import { useEffect } from 'react';

function InterestingFact() {

    const [fact, setFact] = useState("")
    const [joke, setJoke] = useState("")

    useEffect(() => {
      }, [])

    const fetchNewFact = () => {
        fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then (res => res.json())
        .then (json => setFact(json.text))
    }

    const fetchNewJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then (res => res.json())
        .then (json => setJoke(json.value))
    }

  return (
    <div>
        <button onClick={fetchNewFact}>Vajuta siia ja õpi</button>
        <div>{fact}</div>
        <br /><br />
        <button onClick={fetchNewJoke}>Vajuta siia ja saad naerda</button>
        <div>{joke}</div>
    </div>
  )
}

export default InterestingFact