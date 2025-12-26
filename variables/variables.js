// Reglas de nombres de las variables

// Puede iniciar una variable: letras, $, _, posteriormente se pueden usar números
let $miNumero1 = 10;
console.log($miNumero1);

let _miNumero2 = 20;
console.log(_miNumero2);

let miNumero3 = 30;
console.log(miNumero3);

// Nota: JavaScript es sencible a mayusculas y minusculas
// miNumero es diferente a minumero

// Ejemplos de tipos de datos en JavaScript

// Datos numéricos
let miEntero = 10;
console.log(miEntero);

let miFlotante = 7.5;
console.log(miFlotante);

// Datos cadena
let miCadena = "Hola";
let miCadena2 = 'saludos';
let miCadena3 = `cordiales`;
console.log(miCadena + " " + miCadena2 + " " + miCadena3);

// Datos Booleanos
let miBoolean = true;
console.log(miBoolean);

let miBoolean2 = false;
console.log(miBoolean2);

// Dato null
let miNull = null;
console.log(miNull);

// Dato undefined
let miUndefined = undefined;
console.log(miUndefined);

// Conociendo el tipo de dato por consola
let numerosRandon = 34;
console.log(typeof numerosRandon);

let miSaludo = "Hola como vamos";
console.log(typeof miSaludo);

let miBoolean3 = !false;
console.log(typeof miBoolean3);

let miNulo = null;
console.log(typeof miNulo);

let miIndefinido = undefined;
console.log(typeof miIndefinido);

// Hoisting (se puede usar una variable y despues declararla esto solo se aplica con var y no con let)
var x; //1. Declarar la variable
x = 10; // 2. Inicializamos la variable

console.log(x);

z = 14;
y = 5;

console.log(z);

var z;

// Constantes
const MI_CONSTANTE = 25;
//MI_CONSTANTE = 40; no se puede cambiar el valor de una constante
console.log(MI_CONSTANTE);

console.log(Math.PI);
