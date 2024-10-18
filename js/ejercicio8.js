/*Escribe una función que reciba un arreglo y un valor, y retorne true si el valor existe en el arreglo y false si no.*/

let palabras = [
  "perro",
  "computadora",
  "libro",
  "verano",
  "futbol",
  "pizza",
  "amigo",
  "viaje",
  "musica",
  "playa",
  "ciudad",
  "coche",
  "cena",
  "pelicula",
  "juego",
  "verde",
  "flores",
  "ocio",
  "estudio",
  "navidad",
];

/*function buscarPalabra(arreglo, palabra) {
  return arreglo.includes(palabra);
}

console.log(buscarPalabra(palabras, "computadora")); // true
*/

function buscarPalabra() {
  let ingresar = prompt("Escribe una palabra: ");
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === ingresar) {
      return true;
    }
  }
  return false;
}

console.log(buscarPalabra());
