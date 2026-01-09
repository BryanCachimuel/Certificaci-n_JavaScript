/* Alcance de variables */
let variableGlobal = 5;

// modificar el valor
variableGlobal = 10;

// definir la función
function miFuncion(variableLocal) {
    console.log(variableLocal);
    // modificamos la variable global
    variableGlobal = 20;

    // no se puede redefinir una variable global (let)
    // let variableGlobal = 30;
}

// llamamos la función
miFuncion(variableGlobal);