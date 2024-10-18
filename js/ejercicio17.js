/*Dado un arreglo de números y un número n, usa every() para verificar si todos los
números son mayores que n.*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 5;

let todosMayores = numeros.every((numero) => numero > n);

console.log(todosMayores + " no todos los números son mayores que");
