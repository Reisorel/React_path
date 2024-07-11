import {useState, useRef} from "react"
import "./Container.css"


export default function Container() {
 const [state, setState] = useState("")

 function handleInput(e) {
  setState(e.target.value)
 }

  return (
    <div>
      <h1>Controlled vs Uncontrolled inputs </h1>
        <form>
          <label htmlFor="pseudo">Votre nom</label>
          <input
            onChange={handleInput}
            value={state}
            type="text"
            id="pseudo" />
            {!state && <p>Veuillez remplir cet input</p>}
          <button>Envoyer</button>
        </form>

      <p>Votre pseudo: {state}</p>
    </div>
  )
}
