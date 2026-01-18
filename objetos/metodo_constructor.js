/* Método Constructor */
// función constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Nelson','Cacoango','nccc@gmail.com');
console.log(padre);

let madre = new Persona('Camila','Fuerez','cftc@gmail.com');
console.log(madre);

padre.nombre = 'Camilo';
console.log(padre);