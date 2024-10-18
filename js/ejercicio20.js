/*Escribe una función que reciba un arreglo de números y use reduce() para calcular
el producto de todos los números.
 */
let numeros = [1, 2, 3, 4, 5];
function calcularProducto(arreglo) {
  return arreglo.reduce((acumulador, numero) => acumulador * numero, 1);
}
console.log(calcularProducto(numeros));
