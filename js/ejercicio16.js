/*Dado un arreglo de objetos, encuentra el primer objeto que tenga una propiedad
específica usando find().*/

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Maria", edad: 30 },
  { nombre: "Pedro", edad: 28 },
  { nombre: "Ana", edad: 22 },
];

let busqueda = personas.find((persona) => persona.nombre === "Maria");

console.log(busqueda);
