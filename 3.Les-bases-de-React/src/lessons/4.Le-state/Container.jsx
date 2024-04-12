import {useState} from "react"

export default function Container() {

  const [count, setCount] = useState(0)
  console.log("Mise à jour");

  function handleClick() {
    // setCount(count +1)
    setCount(count => count +1)
    setCount(count => count +1)
    setCount(count => count +1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Incrémenter</button>
    </div>
  )
}
