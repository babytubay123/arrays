/*Dado varios arreglos de números, combínalos todos en un solo arreglo y ordénalo de
menor a mayor*/

let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
let numeros3 = [7, 8, 9];

let numerosUnidos = numeros1.concat(numeros2, numeros3);

let numerosOrdenados = numerosUnidos.sort((a, b) => a - b);

console.log(numerosOrdenados);
