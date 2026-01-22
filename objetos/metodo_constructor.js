/* Método Constructor */
// función constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombrecompleto = function() {
        return this.nombre + " " + this.apellido
    }
}

let padre = new Persona('Nelson','Cacoango','nccc@gmail.com');
console.log(padre);

let madre = new Persona('Camila','Fuerez','cftc@gmail.com');
console.log(madre);

padre.nombre = 'Camilo';
console.log(padre.nombrecompleto());

/* Distintas formas de declarar objetos */
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean1 = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};
