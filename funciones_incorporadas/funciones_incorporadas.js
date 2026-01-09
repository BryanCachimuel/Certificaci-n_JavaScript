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

// Subcadenas 
let cadena2 = "Hola, ten buena tarde";

// substring(indice_inicio, indice_final)
let cadena3 = cadena2.substring(0,4);
console.log(cadena3);

let cadena4 = cadena2.substring(6, 21);
console.log(cadena4);

// Concatenación de cadenas
let cadena5 = "Te informamos";
let cadena6 = "que tu saldo a expirado";

console.log(cadena5 + " " + cadena6);

// concatenando con string interpolation
console.log(`${cadena5} ${cadena6}`);