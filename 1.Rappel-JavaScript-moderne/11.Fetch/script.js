// Appel à une API via fetch
// Utilisation de l'API jsonplaceholder pour récupérer des données factices d'utilisateurs
const apiURL = "https://jsonplaceholder.typicode.com/users"
// Définition de la constante contenant l'URL de l'API

// Envoi d'une requête à l'URL de l'API en utilisant la méthode fetch
// Cela retourne une promesse qui sera résolue avec la réponse de la requête
fetch(apiURL)
// Cela retourne une promesse qui sera résolue avec la réponse de la requête// Le bloc suivant est exécuté lorsque la promesse est résolue (qu'elle soit réussie ou échouée)
.then(response => {
  console.log(response)

 // Vérification du statut de la réponse
// Si le statut n'est pas "ok", une erreur est lancée
  if(!response.ok) {
  throw new Error(`Erreur", ${response.status}`)
  }
// Extraction des données JSON de la réponse
  return response.json()
})

//2ème promesse (enchainement)
// Ce bloc est exécuté après que les données JSON ont été extraites de la réponse
// On peut mettre autant de ".then" que l'on veut
.then(data => {
  console.log(data)
  console.log("2ème ", data)
})

// Ce bloc est exécuté si une erreur survient à n'importe quel moment de la chaîne de promesses
.catch(e => {
  console.log(e)
})
