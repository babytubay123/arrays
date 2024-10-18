/*dado dos arreglos de objetos, usa map() para combinar los objetos con el mismo
índice en un solo arreglo de objetos*/

let personas1 = [
  { nombre: "John", edad: 30 },
  { nombre: "Alice", edad: 28 },
  { nombre: "Bob", edad: 32 },
];

let personas2 = [
  { apellido: "Doe", ciudad: "New York" },
  { apellido: "Smith", ciudad: "Los Angeles" },
  { apellido: "Johnson", ciudad: "Chicago" },
  { apellido: "Williams", ciudad: "San Francisco" },
];

let personasCombinadas = personas1.map((persona, index) => ({
  ...persona,
  ...personas2[index],
  nombreCompleto: `${persona.nombre} ${personas2[index].apellido}`,
  direccion: `${personas2[index].ciudad}, ${persona.nombre}, ${personas2[index].apellido}`,
}));

console.log(personasCombinadas);
