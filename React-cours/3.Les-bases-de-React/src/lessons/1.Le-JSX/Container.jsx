function Container() {
  function handleClick(e, id) {
    console.log("Oh Hello", e, id);
  }

  return (
    <div>
      <p>Hello world from container</p>
      <ul className="list">
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      <button>Valider</button>
      <p>{10 +10}</p>
      <p>{"ab"+"c"}</p>
      <p>{"le chat saute!!".toUpperCase()}</p>
      {/* <p>{[<span>Hello World</span>]}</p> */}

      <input type="text"/>
      <hr />
      <img src="" alt="" />
      <p className="txt">Lorem Ipsum</p>
      <label htmlFor=""></label>

      <button className = "btn" onClick={e => handleClick(e, 585)}>Click</button>

    </div>
  )
}
export default Container


// Toujours retourner un seul élément. Une seule éxecution de la méthode JSX.
// Retourner un élément avec plusieurs composants
// Les éléments auto-fermant en HTML doivent être fermés
// Le JSX est un html boosté.
