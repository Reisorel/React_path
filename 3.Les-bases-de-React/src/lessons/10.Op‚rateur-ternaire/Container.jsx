import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [validation, setValidation] = useState(false)

  return (
    <form>
      <label htmlFor="consent">Acceptez-vous?</label>
      <input
        onClick={() => setValidation(!validation)}
        type="checkbox" />
      <p
      className={`${validation ? "valid" : "invalid"}`}
      // style={{ color: `${validation ? "lightgreen" : "red"}` }}
      >

        {validation ? "Bravo, vous envoyez le formulaire" : "Case à cocher"}
      </p>
      {validation ? <p>True</p> : <p>False</p>}
    </form>
  )
}
