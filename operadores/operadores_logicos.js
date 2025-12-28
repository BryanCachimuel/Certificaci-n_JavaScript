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
