export default function Container() {

  const isLogged = false
  let content = ""

  if (isLogged) content = "Bienvenue sur votre contenu privé"
  else content = "veuillez vous connecter"
  return (
    <div>
      <h1>Rendu conditionnel avec if</h1>
      <p>{content}</p>
    </div>
  )
}

// Méthode 1

// export default function Container() {

//   const islogged = false

//   if (islogged) {
//     return (
//       <div>
//         <h1>Rendu conditionnel avec if</h1>
//         <p>Vous êtes connecté</p>
//       </div>
//     )
//   }
//   else {
//     return (
//       <div>
//         <h1>Rendu conditionnel avec if</h1>
//         <p>Vous n'êtes pas connecté</p>
//       </div>
//     )
//   }
// }
