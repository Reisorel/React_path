import { useReducer } from "react"
export default function Container() {
  const [count, Countdispatch] = useReducer(reducer, 0)

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        // console.log(action);
        return state + 1
      case "decrement":
        console.log(action);
        return state - 1
      case "multiply":
        console.log(action);
        return state * 10
      case "divide":
        console.log(action);
        return state / 10
    }
  }

  return <div>
    <h1>Valeur du compteur : {count} </h1>
    <button onClick={() => Countdispatch({ type: "increment"})}>Incrémenter</button>
    <button onClick={() => Countdispatch({ type: "decrement"})}>Décrémenter</button>
    <button onClick={() => Countdispatch({ type: "multiply"})}>Mutiplier par 10</button>
    <button onClick={() => Countdispatch({ type: "divide"})}>Diviser par 10</button>
  </div>
}
