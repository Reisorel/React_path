export default function Card({id, state, changeState}) {
  console.log(id, state);
  return (
    <div>
      <p>User {id}</p>
      <p>State du parent {state}</p>
      <button onClick={() => changeState("Bueongiorno") }>Changer state</button>
    </div>
  )
}


// On change depuis l'enfant la valeur du state du parent.
// Les props se passent seulement du parent à l'enfant
