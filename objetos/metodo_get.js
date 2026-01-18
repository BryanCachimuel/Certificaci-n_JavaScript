/* Objetos */

let persona = {
    nombre: 'Nelson',
    apellido: 'Cacoango',
    email: 'nelsonccc@gmail.com',
    edad: 33,
    idioma: 'es',
    genero: 'masculino',

    get lang() {
        return this.idioma.toUpperCase();
    },

    set lang(lang) {
        this.idioma = lang.toUpperCase()
    },

    get tipogenero() {
        return this.genero
    },

    get nombreCompleto() {
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombreCompleto)
console.log(persona.lang);
console.log(persona.genero)

persona.lang = 'en';
console.log(persona.lang);

