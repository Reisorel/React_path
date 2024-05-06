function Container() {

  const txt = "Test"
  function handleClick(e) {
    console.log("Click", e);
  };

  return (
    <div>
      <p>Hello World</p>
      <ul className="list">
        <li>item</li>
        <li>item</li>
      </ul>
      <button>Valider</button>
      <p>{10 + 10}</p>
      <p>{"ab" +"c"}</p>
      <p>{"Le chat saute".toUpperCase()}</p>
      <p>{txt}</p>
      <p>{[1,2,3,4]}</p>
      <input type="text" />
      <hr />
      <img src="" alt="" />

      <p className="txt">Lorem Ipsum</p>

      <button className="btn" onClick={handleClick}>Bouton handleClick</button>
    </div>
  )
}
export default Container


// Toujours retourner un seul élément. Une seule éxecution de la méthode JSX.
// Retourner un élément avec plusieurs composants
// Les éléments auto-fermant en HTML doivent être fermés
// Le JSX est un html boosté. 
