function Title(){
  return React.createElement("h1",
  {className: "title"},
  "Hello world")
}

ReactDOM.createRoot(document.getElementById("root")).render(Title())

// Toute une application rendue dans une seule div
// Bundler : Rassemble tous les fichiers nécessaires à notre app en un dossier optimisé, le "bundle"
// Le bundle est ensuite prêt à être envoyé sur les serveur
// Vite, webpack, create-react-app (CRA) 
