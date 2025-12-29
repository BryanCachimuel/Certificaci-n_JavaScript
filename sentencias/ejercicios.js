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

let diaSemana = 5;

if(diaSemana === 1) {
   console.log(`${diaSemana}: Lunes `); 
}
else if(diaSemana === 2) {
    console.log(`${diaSemana}: Martes `);
}
else if(diaSemana === 3) {
    console.log(`${diaSemana}: Miercoles `);
}
else if(diaSemana === 4) {
    console.log(`${diaSemana}: Jueves `);
}
else if(diaSemana === 5) {
    console.log(`${diaSemana}: Viernes `);
}
else if(diaSemana === 6) {
    console.log(`${diaSemana}: Sábado `);
}
else if(diaSemana === 7) {
    console.log(`${diaSemana}: Domingo `);
}
else if(diaSemana > 7) {
    console.log(`${diaSemana}: número ingresado no valido `);
}
else if(diaSemana < 1) {
    console.log(`${diaSemana}: número ingresado no valido `);
}