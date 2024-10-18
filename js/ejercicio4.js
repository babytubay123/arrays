//4. Invertir un arreglo Escribe una función que tome un arreglo y lo devuelva invertido (sin usar reverse()).
let numeros = [];
let invertido = [];
const agregar = () => {
  for (let i = 5; i >= 0; i--) {
    let ingresar = parseInt(prompt("Ingresa un número: "));
    numeros.push(ingresar);
  }
};

const invertir = () => {
  for (let i = numeros.length - 1; i >= 0; i--) {
    invertido.push(numeros[i]);
  }
};

agregar();
invertir();
console.log("los números ingresados fueron: " + numeros);
console.log("los números ingresados invertidos fueron: " + invertido);
