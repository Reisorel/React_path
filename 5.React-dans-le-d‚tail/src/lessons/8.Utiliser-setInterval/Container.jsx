import {useState, useEffect} from "react"
export default function Container() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      // setCount(count+1);
      // Utiliser une fonction permet de récupérer le state "frais" qui sera incrémenté.
      setCount(state => state +1)
    }, 1000);

    return () => clearInterval(intervalID)
  }, []) //[] permet de contrôller à quelle fréquence est éxécuté l'effet

  // setInterval(() => {
  //   setCount(count+1)
  // }, 1000);

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
    </div>
  )
}
