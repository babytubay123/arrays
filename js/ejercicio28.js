/*Dado un arreglo de objetos con propiedades {nombre: string, edad: number}, usa
map() para crear un nuevo arreglo que solo contenga los nombres.*/

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Maria", edad: 30 },
  { nombre: "Pedro", edad: 28 },
  { nombre: "Ana", edad: 22 },
];

let nombres = personas.map((persona) => persona.nombre);

console.log(nombres);
