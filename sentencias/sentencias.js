/* Sentencia if */
let miNumero = 9;

// revisar si el número es positivo
if(miNumero > 0) {
    console.log(`${miNumero}: es positivo`);
}
else if(miNumero < 0) {
    console.log(`${miNumero}: es negativo`);
}
else {
    console.log(`${miNumero}: es cero`);
}

/* Operador ternario */
let analisisNumero = -15;

let respuesta = analisisNumero > 0  ? 'es positivo' : 'es negativo o cero';
console.log(respuesta);