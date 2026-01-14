/* Objetos */
let persona = {
    nombre: 'Nelson',
    apellido: 'Cacoango',
    email: 'nelsonccc@gmail.com',
    edad: 33,

    get nombreCompleto() {
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombreCompleto)

