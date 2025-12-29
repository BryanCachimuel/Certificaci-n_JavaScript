/* Operadores Lógicos */
let a = true;
let b = false;

// Operador && (and o Y)
// Regresa verdadero si ambos operandos son verdaderos
console.log(`${a} && ${b} -> ${a && b}`);

// Operador Lógico || (or o O)
//  Regresa verdadero si cualquiera de los valores es verdadero
console.log(`${a} || ${b} -> ${a || b}`);

// Operador ! (not o No)
// Invierte el valor original. true -> false y false -> true
console.log(`${a} -> ${!a}`);
console.log(`${b} -> ${!b}`);

// Ejercicio valor dentro de rango

// definimos variables
let minimo = 0, maximo = 5;

// valor para saber si está dentro de rango
let dato = 3;

// revisamos si está dentro del rango
let dentroRango = dato >= minimo && dato <= maximo;
console.log('Valor dentro del rango: ', dentroRango);

/* Precedencia de Operadores
    1. Parentesis y corchetes
    2. Operadores unarios, como -, ++, --, !
    3. Aritméticos *, / y %
    4. Aritméticos + y -
    5. Relacionales <, <=, > y >=
    6. Igualdad == y !=
    7. Lógicos && y ||
    8. Asignación =, +=, -=, *=, etc
*/

// Ejercicio. Se revisa de izquierda a derecha
let c = 12 / 3 + 2 * 3 -1;

// Paso 1. División 12 / 3 = 4
// Paso 2. Multiplicaciób 2 * 3 = 6
// Paso 3. Suma 4 + 6 = 10
// Paso 4. Resta 10 - 1 = 9 

console.log(c);

