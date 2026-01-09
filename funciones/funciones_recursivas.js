/*  Funciones Recursivas */

// Imprimir 3, 2, 1
function funcionRecursiva(numero) {
    // caso base
    if(numero == 1) {
        console.log(numero);
    }
    else {
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}

// llamamos a la función
funcionRecursiva(3);