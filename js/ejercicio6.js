/*Concatenar arreglos
Escribe una función que tome dos arreglos y los combine en uno solo.*/

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function concatenarArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(
  "EL arreglo con elementos fucionados es: " + concatenarArrays(array1, array2)
);
console.log("Arreglo 1: " + array1);
console.log("Arreglo 2: " + array2);
