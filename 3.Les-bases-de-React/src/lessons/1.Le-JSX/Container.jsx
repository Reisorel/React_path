function Container() {

  function handleClick(e) {
    console.log("Click", e)
  }

  return <div>
    <p>Hello Palapapa</p>
    <ul className="li">
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
    <p>{10 + 10}</p>
    <p>{"ab" + "c"}</p>
    <p>{"le chat saute !".toUpperCase()}</p>
    {/* <p>{[<span>Hello World</span>]}</p> */}

    <input type="text" />
    <hr />
    <img src="" alt="" />
    <hr />
    <img srv="" alt="" />
    <p className="txt">Lorem Ipsum</p>
    <label htmlFor=""></label>
    <button aria-label="toggle button"></button>

    <button className="btn" onClick={handleClick}>Click</button>

  </div>
}
export default Container

// Les éléments auto-fermant en HTML doivent être fermés
// la div retourne ici une seule éxecution de la fonction JSX
