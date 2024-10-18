/*Dado un arreglo de números, retorna solo los números pares usando filter().*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function paresnum(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}

let pares = paresnum(numeros);
console.log(pares);
