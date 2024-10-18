/*Escribe una función que reciba un arreglo y un valor, y retorne el índice del valor en
el arreglo (o -1 si no existe).*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function buscarValor(arreglo, valor) {
  return arreglo.indexOf(valor);
}

console.log(buscarValor(numeros, 2));
