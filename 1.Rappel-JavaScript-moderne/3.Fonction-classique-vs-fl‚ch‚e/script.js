/*
    Redécouvrons ensemble les fonctions fléchées et leurs différences avec les fonctions classiques.
*/


/*
    1. Syntaxe.
    La syntaxe est moins chargée, pouvant ainsi être plus facilement utilisée en tant qu'argument, notamment en tant que fonction callback.
*/

function add(a,b) {
  return a+b
}
// expression de fonction rentrée dans une variable
// il y a un return implicite
const add2 = (a,b) => a + b
console.log(add2(5,10));

const numbers = [1,2,3]

numbers.forEach(el => console.log(el))
// Même fonction
numbers.forEach(function(el){return console.log(el)})


// les vraiables se font hoisted en undefined.
// les fonctions se font hoisted dès la première ligne de code

/*
    2. Le mot clé this.

    Les fonctions classiques créent un mot clé this lors de leur exécution, en fonction de l'objet qui les appelle.
    Si elles ne sont pas appelées par un objet, this est automatiquement égal à window (l'objet global).

    Les fonctions fléchées ne créent pas de this, néanmoins elles peuvent lire le this d'une fonction classique si elles se situent dedans.
    Si elles ne sont pas dans l'environnement(donc contexte) une fonction classique, elle lisent le this de l'objet global, car elles sont dans le contexte d'execution global.
*/

const person = {
  age: 45,
  getAge: function() {
    const arrowInsideClassic = () => {
      console.log(this)
    }
    arrowInsideClassic()
    return this
  }
}

console.log(person.getAge())

// ici this va être égal à l'objet qui l'appele, ici "personn"

// si on crée une fonction de plus haut niveau :
function foo(){
  console.log(this)
  }
  foo()


  // foo est enregistré dans l'objet global. Le function execution context l'attribue à window.

/*
    3. arguments
    Même chose pour l'objet "arguments" qui est crée chez les fonctions classiques, mais pas les fonctions fléchées.
*/




/*
    Petit recap pour vous aider avec la valeur de this dans des fonctions classiques vs fléchées (hors fonction constructeur / usestrict)

    Fonction classique :
    1. La fonction est appelée depuis un objet ? this = cet objet.
    2. La fonction n'est pas appelée depuis un objet ? this = objet global window.

    Fonction fléchée :
    1. La fonction fléchée se situe dans une fonction classique ? this = le this de la fonction classique.
    2. La fonction fléchée ne se situe pas dans une fonction classique ? this = objet global window.
*/
