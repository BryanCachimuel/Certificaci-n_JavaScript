function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombrecompleto = function() {
        return this.nombre + " " + this.apellido
    }
}

/* para agregar una propiedad para todos los objetos se utiliza prototype */
Persona.prototype.tel = '0973234672';

let padre = new Persona('Nelson','Cacoango','nccc@gmail.com');
// para modificar el valor tel solo para este objeto
padre.tel = '09654598766';
console.log(padre.tel);

let madre = new Persona('Camila','Fuerez','cftc@gmail.com');
console.log(madre.tel);