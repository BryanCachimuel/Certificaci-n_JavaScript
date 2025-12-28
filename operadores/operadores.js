// Operadores Aritméticos
let a,b,c,d,e,f;

// suma
a = 3 + 4;
console.log(a);

// resta
b = 6 - 2;
console.log(b);

// multiplicación
c = a * 4;
console.log(c); 

// división
d = b / 2.5;
console.log(b);

// Modulo (residuo de la división)
f =  9 % 2;
console.log(f);

// Potencia (ES2016 - ECMASsript)
e = 2 ** 3; // 2 * 2 * 2 = 8
console.log(e);


/* Operadores de incremento y decremento */
let g, h, i;
g = 0;

// Pre-incremento
++g;
console.log(g);

// post-incremento
g++;
console.log(g);

// Pre-decremento
--g;
console.log(g);

// post-decremento
g--;
console.log(g);

// Ejemplos
g = 5;
h = 2;
i = ++g * h--;
console.log(i);
console.log(g);
console.log(h);

/* Operadores de Asignación */
let miNumero = 10;
console.log(miNumero);

miNumero = 20;
console.log(miNumero);

// Operador +=
miNumero += 5;
console.log(miNumero);

// Operador -=
miNumero -= 3;
console.log(miNumero);

// Operador *=
miNumero *= 2;
console.log(miNumero);

// Operador /=
miNumero /= 4;
console.log(miNumero);

// Operador %=
miNumero %= 2;
console.log(miNumero);

// Operador **=
miNumero = 8;
miNumero **= 4;
console.log(miNumero);

/* Operadores Relacionales (Comparación) */
let  m = 5;
let  l = '5';

// operador de igualdad == 
// solo compara valores y hace una conversión si es necesario
console.log("m == l -> ", m == l);

// operador de igualdad estricta o exacto ===
// se compara el valor y el tipo de dato 
console.log("m === l -> ", m === l);

// aplicando interpolación
console.log(`${m} === ${l} -> ${m === l}`);

// Operador distintos
// Compara valor y convierte el tipo de dato si es necesario
console.log(`${m} != ${l} -> ${m != l}`);

// operador distinto exacto
// compara el valor y tipo de dato
console.log(`${m} !== ${l} -> ${m !== l}`);