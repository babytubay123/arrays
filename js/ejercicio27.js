/*Dado un arreglo de valores, cuenta cuántas veces aparece un valor específico
usando reduce().*/

let valores = [1, 2, 3, 4, 5, 2, 3, 4, 5, 6];
let valorBuscado = 2;

let cuentaValor = valores.reduce((acumulador, valorActual) => {
  if (valorActual === valorBuscado) {
    return acumulador + 1;
  } else {
    return acumulador;
  }
}, 0);

console.log(`El valor ${valorBuscado} aparece ${cuentaValor} veces.`);
