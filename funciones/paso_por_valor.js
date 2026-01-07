/* Paso por valor en las funciones 
Pasamos información de tipo primitivo (number, bool, string)
*/
function cambiarValor(parametro) {
    parametro = 20;
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento);
