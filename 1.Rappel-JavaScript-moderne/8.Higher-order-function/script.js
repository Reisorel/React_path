/*
    1. Fonction d'ordre supérieur.

    Les fonctions d'ordre supérieur sont des fonctions qui vont soit recevoir une fonction callback en argument soit retourner une fonction, ou les deux à la fois !

    Cela ouvre la voie à de nombreuses solutions et à une plus grande fléxibilité.
*/



// Je déclare ma fonction d'ordre supérieur customFilter avec les paramètres "arr" (un tableau) et "callback" (une fonction)
function customFilter(arr, callback) {
// Je crée un tableau vide dans lequel je stockerai les éléments filtrés
  const filteredArray = []
// Je parcours chaque élément de l'array "arr" en utilisant une boucle for
  for (let i = 0; i < arr.length; i++) {
// Je vérifie si l'élément actuel de l'array "arr" satisfait la condition définie par le callback
    if (callback(arr[i])) {
// Si la condition est vraie, j'ajoute cet élément au tableau filtré
      filteredArray.push(arr[i])
    }
  }
  // Je retourne le tableau filtré une fois la boucle terminée
  return filteredArray
}

// J'initialise un tableau "salaries" contenant différents salaires
const salaries = [1200, 5000, 4000, 2500, 3450, 1800]

// J'affiche le résultat de l'appel à la fonction customFilter avec "salaries" comme tableau et une fonction de callback
// qui vérifie si chaque élément (salaire) est supérieur à 3000
console.log(customFilter(salaries, salary => salary > 3000));





const countries = [
  {
    name: "Japan",
    gdp: 4941
  },
  {
    name: "Germany",
    gdp: 4260
  },
  {
    name: "South Korea",
    gdp: 1811
  },
  {
    name: "India",
    gdp: 3176
  },
  {
    name: "Canada",
    gdp: 1988
  },
]

console.log(customFilter(countries, country => country.gdp > 2000));
