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

// Creación de objetos (poco comun)
let persona2 = new Object();
persona2.nombre = 'Kevin';
persona2.apellido = 'Rodríguez';
persona2.telefono = '0954834032';

console.log(persona2.telefono);

// Acceder a las propiedades de los objetos
console.log(persona['nombre']);

// for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Agregar propiedades al objeto
persona.ciudad = 'Ibarra';

console.log(persona);

// Eliminar propiedades del objeto
delete persona.ciudad;
console.log(persona);
