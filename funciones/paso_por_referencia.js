/* Paso por referencia
Objetos (array) se pasan por referencia
*/

function cambiarValor(parametro) {
    parametro[0] = 20;
}

// Llamamos a la función
let arreglo = [10];
console.log(`Antes de la función: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Después de la función: ${arreglo[0]}`);