/* Funciones */

// 1. definir el procedimiento
function saludar(mensaje) {
    console.log(`Mensaje: ${mensaje}`);
}

// 2. Llamar al procedimiento
saludar('Hola');

// declarar la función
function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}

// llamar o invocar a la función
let argA = 8, argB = 9;
let sumarResultado = sumar(argA,argB);

// Imprimir el resultado de la suma
console.log(`Resultado de la suma: ${sumarResultado}`);

/* Paso de cadenas en las funciones
cadenas inmutables en JS (no se puede modificar su valor)
*/
function cambiarValor(parametro) {
    parametro = 'Adios';
}

// llamamos a la función
let argumento = 'Hola';
console.log(`Antes de la función: ${argumento}`);
cambiarValor(argumento);
console.log(`Después de la función: ${argumento}`);

