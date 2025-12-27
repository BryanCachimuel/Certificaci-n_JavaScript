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
let g, h, i, j;
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

miNumero = 15;
console.log(miNumero);