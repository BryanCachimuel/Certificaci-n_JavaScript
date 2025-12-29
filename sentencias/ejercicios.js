/* Algoritmo mayor de edad */
const EDAD_ADULTO = 18;
let edadPersona = 30;

if(edadPersona >= EDAD_ADULTO) {
    console.log(`${edadPersona} que es la edad de la persona, es mayor de edad`);
}
else if(edadPersona <= 17 && edadPersona >= 1) {
    console.log(`${edadPersona} que es la edad de la persona, es menor de edad`);
}
else {
    console.log(`${edadPersona}, lo que as ingresado no es una edad`)
}