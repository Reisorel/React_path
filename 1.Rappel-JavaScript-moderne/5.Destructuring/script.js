/*
    1. Destructuring.

    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany",
  beverage: "water"
}

const {age, country, userName} = userObj
console.log(age, country, userName);


// Donner un nom différent aux constantes

// const {userName: mainName, age: exactAge, country:origin} = userObj
// console.log(mainName, exactAge, origin)

// Créer des constantes par défaut, au cas où les props n'existent pas.

const {coutnry, sport = "football", beverage ="beer"} = userObj
console.log(country, sport, beverage)


// Combiner un nom différent et des valeurs par défaut.


const {userName: mainName= "Hanz"} = userObj
console.log(mainName)

// Affecter les props d'un objet attendu en paramètre

const numbers = {
  num1: 50,
  num2: 100
}

function foo(numbers) {
  console.log(numbers)
  return numbers.num1 + numbers.num2
}
console.log(foo(numbers))

function foo2({num1, num2}) {
  console.log(numbers)
  return num1 + num2
}
console.log(foo2(numbers))

// Ces 2 fonctions font la même chose.

/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat","dog","mouse","lion"];
const [cat, dog] = animals
console.log(cat, dog)



// valeur par défaut et ignorer des valeurs

const fruits = ["strawberry", "grapes", "banana", "apples"]

const [strawberry, grapes,, apple] = fruits
console.log(strawberry, grapes, apple)

// affecter le reste d'un tableau

const [student, ...marks] = ["Adrien", 12,12,12,113,14]
console.log(student, marks)
// Fonctionne aussi avec les strings
