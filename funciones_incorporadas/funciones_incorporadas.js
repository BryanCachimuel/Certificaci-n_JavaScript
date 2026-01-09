/* Funciones Incorporadas en JS */

// Obtener el largo de una cadena
let cadena1 = "Hola saludos";
console.log(cadena1.length);

// no podemos modificar una cadena en JS, debido a que son inmutables
cadena1[0] = 'x';
console.log(cadena1);

// si podemos asignar una nueva cadena
cadena1 = 'Adios';
console.log(cadena1);

// recorrer cada caracter
for(let i = 0; i < cadena1.length; i++) {
    console.log(cadena1[i]);
}