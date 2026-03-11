// // Fonction avec let
// function calculerSomme(a, b) {
//   let resultat = a + b;
//   return resultat;
// }

// // Utilisation
// console.log(calculerSomme(5, 4)); // Affiche 8

// // Fonction avec let et boucle
// function afficherNombres(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }

// afficherNombres(5); // Affiche 1, 2, 3, 4, 5

// exercice 2


// const doubler = (nombre) => {
//   return nombre * 2;
// };


// console.log(doubler(5)); // Affiche 10


// exercie 3  


// function inverserChaine(str) {
//     // On split la chaîne en tableau de caractères, on inverse et on rejoint
//     return str.split("").reverse().join("");
// }

// // Utilisation de la fonction
// const original = "Bonjour";
// const inverse = inverserChaine(original);
// console.log(`Original : ${original}`);   // Affiche "Original : Bonjour"
// console.log(`Inverse : ${inverse}`);     // Affiche "Inverse : ruojnoB"

// // Autre exemple : mettre en majuscule la première lettre
// function capitaliserPremiereLettre(str) {
//     if (!str) return str;
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitaliserPremiereLettre("javascript")); // Affiche "Javascript"


// //Exercice 4 string 
// let greeting ="Hello, Papa ";
// let name = 'Alice';
// let message = `Coucou, ${name}!`;

// console.log(greeting);
// console.log(name);
// console.log(message);

// console.log(greeting.length);
// console.log(greeting.toUpperCase());
// console.log(greeting + "Tsiory");

// Exercice 5 

//Fonction pour vérifier si un nombre est pair ou impair
// function estPairOuImpair(nombre) {
//   if (nombre % 2 === 0) {
//     return "pair";
//   } else {
//     return "impair";
//   }
// }


// console.log(estPairOuImpair(12)); // Affiche "pair"
// console.log(estPairOuImpair(2)); // Affiche "impair"

// function carre(nombre) {
//   return nombre * nombre;
// }

// console.log(carre(6)); // Affiche 25

//exercice 6

// Exemple simple avec des booléens en JavaScript

let estVrai = true;
let estFaux = false;

console.log(estVrai);  
console.log(estFaux);  


let a = 5;
let b = 10;

console.log(a < b);  
console.log(a > b);   
console.log(a === 5);

