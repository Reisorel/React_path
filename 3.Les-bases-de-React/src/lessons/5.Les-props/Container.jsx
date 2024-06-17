import { useState } from "react"
import Card from "./Card"

export default function Container() {
  const [state, setState] = useState("Hello Bobyduy")
  const id = 23543

  return (
    <div>
      <p>State du containeur: {state} </p>
      <Card id = {id} state={state} changeState={setState}/>
    </div>
  )
}
