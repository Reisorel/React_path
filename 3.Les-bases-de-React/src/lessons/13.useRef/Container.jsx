import {useRef, useState} from "react"

export default function Container() {

  const [state, setState] = useState(0)
  const countRef = useRef(0)
  console.log(countRef);

  function handleCountRef(){
    countRef.current++
    console.log(countRef.current);
  }
  console.log("Mise à jour");
  return (
    <div>
      <h1>Le hook useRef()</h1>
      <p>Valeur du state {state} </p>
      <p>Valeur de la ref {countRef.current}</p>
    <button onClick={handleCountRef}>Incrémenter la ref</button>
    <button onClick={() => setState(state+1)}>Incrémenter le state</button>
    </div>
  )
}
