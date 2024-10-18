/*2. Encuentra el mayor número
Escribe una función que encuentre el número más grande en un arreglo de
números. */
let numeros = [];
const agregar = () => {
  for (let i = 1; i <= 5; i++) {
    let ingresar = parseInt(prompt("Ingresa un número: "));
    numeros.push(ingresar);
  }
};
agregar();
let masgrande = Math.max(...numeros);
console.log("El número más grande es: " + masgrande);
console.log("los números ingresados fueron: " + numeros);
