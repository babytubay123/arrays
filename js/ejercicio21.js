/*scribe una función que reciba una cadena de texto y la convierta en un arreglo de
palabras.*/

function convertirCadenaToArray(cadena) {
  return cadena.split(" ");
}

let frase = "Hola mundo, como estás?";

let palabras = convertirCadenaToArray(frase);

console.log(palabras);
