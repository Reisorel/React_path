/*
    Quelques fonctionnalités syntaxiques ont été rajoutées aux objets à partir de 2015.
*/

//  Rajouter une fonction classique & une fonction fléchée

const obj = {
feature() {
  console.log("Hello world!")
},
arrow: () => {
  console.log("Hello Solo!")
}
}

obj.feature() // Affiche "Hello world!"
obj.arrow() // Affiche "Hello Solo!"

// Rajouter des propriétés facilement.

const userName = "Lucie";
const age = 24;

const user = {
  userName,
  age
}
console.log(user);


// Utiliser une expression pour créer une prop

let category = "industry";
const plant = {
  id: 547,
  [category]: "Microship"
}
console.log(plant);
