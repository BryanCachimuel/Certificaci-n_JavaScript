/* Objetos */
let persona = {
    nombre: 'Nelson',
    apellido: 'Cacoango',
    email: 'nelsonccc@gmail.com',
    edad: 33,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },

    get nombreCompleto() {
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombreCompleto)
console.log(persona.lang);

