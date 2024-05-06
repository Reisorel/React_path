import Container from "./lessons/2.Premier-composant/Container"

function App() {
  return (
    <div className="main-content">
      <h1>Cours React</h1>
      <Container/>
    </div>
  )
}

export default App

// On retourne l'élément div qui retourne tout le reste.
// Toujours retourner qu'un seul élément. Execution de la méthode JSX.
