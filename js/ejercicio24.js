/*Dado un arreglo de números, usa map() para reemplazar cada número negativo con
su valor absoluto*/

let numeros = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];

let numerosAbsolutos = numeros.map((numero) => Math.abs(numero));

console.log(numerosAbsolutos);
