/*Crea una función que multiplique cada número de un arreglo por 2 usando map().*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicarnumerospordos() {
  return numeros.map((numeros) => numeros * 2);
}
console.log(multiplicarnumerospordos());
