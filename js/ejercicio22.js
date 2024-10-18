/*ado un arreglo que contiene valores truthy y falsy, elimina todos los valores falsy
usando filter().*/

let valores = [
  true,
  false,
  0,
  1,
  "hola",
  "",
  null,
  undefined,
  NaN,
  false,
  true,
];

function eliminarValoresFalsy(valores) {
  return valores.filter((valor) => Boolean(valor));
}

let valoresFiltrados = eliminarValoresFalsy(valores);
console.log(valores);
