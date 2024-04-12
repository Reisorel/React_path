export default function Card({id, state, changeState}) {
  console.log(id,state);
  return (
    <div>
      <p> User {id}</p>
      <p> State du parent {state}</p>
      <button onClick={() => changeState("Hola") }>Changer le state</button>
    </div>
  )
}
