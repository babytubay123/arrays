/*dado un arreglo de personas con edades, agrúpalas en diferentes grupos según la
década en la que se encuentren (20s, 30s, etc.) usando reduce().*/

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Maria", edad: 30 },
  { nombre: "Pedro", edad: 28 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Sofia", edad: 42 },
  { nombre: "Carlos", edad: 27 },
  { nombre: "Jorge", edad: 45 },
];

let gruposEdades = personas.reduce((acc, persona) => {
  let decada = Math.floor(persona.edad / 10) * 10;
  if (!acc[decada]) {
    acc[decada] = [];
  }
  acc[decada].push(persona.nombre);
  return acc;
}, {});

console.log(gruposEdades);
