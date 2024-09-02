import "./Container.css"
import {useEffect, useState} from "react"
export default function Container() {
  const [count, SetCount] = useState(0)
  console.log("MAJ");

  useEffect(() => {
    console.log("Après première création et après chaque mise à jour du DOM");
  },[count]
)

  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => SetCount(count +1) }>+1 </button>
      <p>{count}</p>
    </div>
  )
}
