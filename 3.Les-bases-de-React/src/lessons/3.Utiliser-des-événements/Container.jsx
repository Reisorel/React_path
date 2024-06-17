export default function Container() {

  function handleClick(e) {
    console.log("click!");
  }

  function handleClickWithID(id) {
    console.log(id);
  }
  function handleClickWithIDAndEventOject(e, id) {
    console.log(e, id);
  }

return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
      <button onClick={() => console.log("clic !")}>Clic</button>
      {/* Mauvaise pratique, peu maintenable */}
      <button onClick={() => {
        console.log("clic !")
        console.log("clic !")
        console.log("clic !")
        console.log("clic !")
        console.log("clic !")
        console.log("clic !")
      }}>Clic</button>


      {/* On lui préfère en général ceci */}
      <button onClick={handleClick}>Clic</button>
      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      <button onClick={() => handleClickWithID(124514)}>Clic</button>


      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
      <button onClick={e => handleClickWithIDAndEventOject(e, 124514)}>Clic</button>

    </div>
  )
}
