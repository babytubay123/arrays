/*3. Promedio de números
Dado un arreglo de números, crea una función que calcule y retorne el promedio de
esos números. */
let numeros = [];
let suma = 0;
const sumadenumeros = () => {
  for (let i = 1; i <= 7; i++) {
    let ingresar = parseInt(prompt("Ingresa un número"));
    numeros.push(ingresar);
    suma = suma + ingresar;
    proedio = suma / numeros.length;
  }
  console.log(`El promedio es: ${proedio}`);
};

sumadenumeros();
console.log("Las calificaciones ingresadas fueron: " + numeros);
