//5. Conteo de elementos Dado un arreglo de strings, retorna cuántos elementos tiene el arreglo.
let array = [];
let contador;

function agregarPalabra() {
  let palabraClave = prompt(
    "Ingrese una palabra clave (escriba 'parar' para detener): "
  );

  if (palabraClave !== "parar") {
    array.push(palabraClave);
    agregarPalabra();
  }
}

function contarElementos() {
  contador = array.length;
  console.log("Tu arreglo tiene " + contador + " elementos");
  console.log("Las palabras clave ingresadas fueron: " + array);
}

agregarPalabra();
contarElementos();
