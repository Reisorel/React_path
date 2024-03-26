/*
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/

const array = [1,2,3, {a:5}]
// on ajoute un objet (a:5})
console.log(...array)

// affiche 1 2 3

const shallowArrayCopy = [...array, 4,5,6]
// il est copié dans le tableau mais en temps que valeur de référence 
console.log(shallowArrayCopy)
// affiche 1,2,3,4,5,6

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.



// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court."
