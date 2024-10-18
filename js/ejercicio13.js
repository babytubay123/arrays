/*Escribe una función que, dado un arreglo de palabras y un número n, devuelva las
palabras que tengan más de nletras*/

let palabras = ["hola", "mundo", "adios", "amigo", "futbol", "pizza"];

function palabrasConMasDeNLetras(arreglo, n) {
  return arreglo.filter((palabra) => palabra.length > n);
}

let palabrasMasLargas = palabrasConMasDeNLetras(palabras, 5);

console.log(palabrasMasLargas);
