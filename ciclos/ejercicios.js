/* Imprimir los primeros 10 números de 3 en 3 */
let maximo = 10, minimo = -10;
for(let i = 1; i <= maximo; i += 3){
    console.log(i)
}

for(let j = 1; j >= minimo; j -= 3) {
    console.log(j)
}

/* Realizar la suma de los primeros 5 números  utilizando el ciclo for */
let max = 5, acumuladorSuma = 0;
for(let k = 1; k <= max; k++) {
    // Imprimimos lo que va a sumar
    console.log(`${acumuladorSuma} + ${k}`);
    // Realizamos la suma parcial
    acumuladorSuma += k;
    console.log(acumuladorSuma);
}

console.log(acumuladorSuma);

/* Realizar la suma de los primeros 5 números  utilizando el ciclo while */
let numero = 1, maxi = 5, acmSuma = 0;

while(numero <= maxi) {
    // Imprimimos lo que va a sumar
    console.log(`${acmSuma} + ${numero}`);
    // Realizamos la suma parcial
    acmSuma += numero;
    console.log(acmSuma);
    numero++;
}

console.log(acmSuma);

/* Realizar la suma de los primeros 5 números  utilizando el ciclo do while */
do {
    // Imprimimos lo que va a sumar
    console.log(`${acmSuma} + ${numero}`);
    // Realizamos la suma parcial
    acmSuma += numero;
    console.log(acmSuma);
    numero++;
}while(numero <= maxi);

console.log(acmSuma);