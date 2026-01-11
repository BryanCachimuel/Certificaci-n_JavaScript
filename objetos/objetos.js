/* Objetos */
let persona = {
    nombre: 'Nelson',
    apellido: 'Cacoango',
    email: 'nelsonccc@gmail.com',
    edad: 33,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombre + " " + persona.apellido);

// impresión de la función creada dentro del objeto
let datos = persona.nombreCompleto();
console.log(datos);