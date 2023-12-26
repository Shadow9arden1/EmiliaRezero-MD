```javascript
// Definir una lista de palabras desordenadas
var palabrasDesordenadas = ["manzana", "pera", "banana", "naranja"];

// Función para mezclar las palabras desordenadas
function mezclarPalabras(palabras) {
  for (var i = palabras.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = palabras[i];
    palabras[i] = palabras[j];
    palabras[j] = temp;
  }
  return palabras;
}

// Llamar a la función para mezclar las palabras
var palabrasMezcladas = mezclarPalabras(palabrasDesordenadas);

// Mostrar las palabras mezcladas al usuario
console.log("Ordena las siguientes palabras:");
console.log(palabrasMezcladas);

// Función para verificar si las palabras están ordenadas correctamente
function verificarOrden(palabras) {
  for (var i = 0; i < palabras.length - 1; i++) {
    if (palabras[i] > palabras[i + 1]) {
      return false;
    }
  }
  return true;
}

// Obtener la respuesta del usuario
var respuestaUsuario = prompt("Ingresa las palabras en orden:");

// Convertir la respuesta del usuario en un array
var palabrasUsuario = respuestaUsuario.split(" ");

// Verificar si las palabras están ordenadas correctamente
var esCorrecto = verificarOrden(palabrasUsuario);

// Mostrar el resultado al usuario
if (esCorrecto) {
  console.log("¡Correcto! Las palabras están en orden.");
} else {
  console.log("Incorrecto. Las palabras no están en orden.");
}
```
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(ordenar|palabra|orden)$/i;
export default handler;