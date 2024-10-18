/*Eliminar duplicados
Dado un arreglo de números, retorna un nuevo arreglo con los valores únicos (sin
duplicados).*/

let numeros = [
  1, 2, 3, 2, 4, 5, 3, 6, 7, 8, 9, 10, 3, 4, 5, 6, 7, 8, 3, 2, 3, 4, 5, 7, 8, 0,
  8,
];

let numerosUnicos = [...new Set(numeros)];

console.log(numeros);
console.log(numerosUnicos);
