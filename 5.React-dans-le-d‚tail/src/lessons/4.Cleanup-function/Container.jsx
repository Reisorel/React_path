import Card from "./Card"
import { useState } from "react"

export default function Container() {

  const [showCard, SetShowCard] = useState(true)
  return (
    <div>
      <h1>Cleanup function</h1>
      <button onClick={() => SetShowCard(!showCard)}>Montrer/cacher la carte</button>
      {showCard && <Card/>}
    </div>
  )
}
