/*Dado un arreglo de números, usa some() para verificar si al menos uno es par.*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let par = numeros.some((numero) => numero % 2 === 0);

console.log(par);
