import {useState} from "react"

export default function Container() {

  const [count, setCount] = useState(0)
  console.log("Mise à jour!");

  function handleClick(){
    setCount(count => count +1)
  }
  function handleClick2(){
  setCount(count => count +1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Incrémenter</button>
      <button onClick={handleClick2}>Décrémenter</button>
    </div>
  )
}


// Quand on change l'état du composant button, tous les parties qui dépendent du composant sont automatiquement changées
// On utilise le hook "useState" pour gérer l'état du compteur ('count')

// React gère automatiquement la mise à jour et le rendu des composants lorsque l'état change.
// Permet de créer des interfaces dynamiques et réactives.
