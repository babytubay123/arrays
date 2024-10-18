/*
1. Suma de los elementos de un arreglo
Escribe una función que reciba un arreglo de números y retorne la suma de todos
sus elementos.


let numeros = [];
let suma = 0;
const sumadenumeros = () => {
  for (let i = 1; i <= 3; i++) {
    let ingresar = parseInt(prompt("Ingresa un número"));
    numeros.push(ingresar);
    suma = suma + ingresar;
  }
  console.log(`La suma de los números ingresados es: ${suma}`);
};

sumadenumeros();
console.log("Los números ingresados fueron: " + numeros);
*/

let numeros = [];
let suma = 0;
function sumadenumeros(suma) {
  for (let i = 1; i <= 3; i++) {
    let ingresar = parseInt(prompt("Ingresa un número"));
    numeros.push(ingresar);
    suma += ingresar;
  }
  console.log(`La suma de los números es: ${suma}`);
}

sumadenumeros();
console.log("Los números ingresados fueron: " + numeros);
