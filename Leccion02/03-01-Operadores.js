let a = 3, b = 2, c = 1, d = 4;
let z = a + b;
console.log("Suma: " + z);

z =  a - b;
console.log("Resta: " + z);

z =  a * b;
console.log("Multiplicacion: " + z);

z =  a / b;
console.log("Division: " + z);

z =  a % b;
console.log("Residuo: " + z);

z =  a ** b;
console.log("Exponente: " + z);

z =  ++a;
console.log("Pre-incremento: " + a);
console.log("Pre-incremento: " + z);

z =  b++;
console.log("Post-incremento: " + b);
console.log("Post-incremento: " + z);

z =  --a;
console.log("Pre-decremento: " + a);
console.log("Pre-decremento: " + z);

z =  b--;
console.log("Post-decremento: " + b);
console.log("Post-decremento: " + z);

z = a * b + c / d;
console.log("Precedencia: " + z);

z = c + a * b / d;
console.log("Precedencia: " + z);

z = (c + a) * b / c;
console.log("Precedencia: " + z);

//Operadores de asignacion
let x = 1;
x += 3;
console.log(x);

x -= 2;
console.log(x);

x *= 3;
console.log(x);

x /= 2;
console.log(x);

//Operadores comparacion
let f = 3, g = 2, h = "3";

let i = f == g;
console.log(i);

i = f == h;
console.log(i);

//estricto compara tambien el tipo
i = f === h;
console.log(i);

//Operador distinto a
i = f != g;
console.log(i);

i = f != h;
console.log(i);

//estricto compara tambien el tipo
i = f !== h;
console.log(i);

//Operadores Relacionales
i = f < g;
console.log(i);

i = f <= g;
console.log(i);

i = f > g;
console.log(i);

i = f >= g;
console.log(i);

//Operadores Logicos
//Ejemplo AND (&&)
let j = 5;
let valMin = 0, valMax = 10;

if(j >= valMin && j <= valMax){
    console.log("Dentro de rango");
} else {
   console.log("Fuera de rango");
}

let vacaciones = false, diaDescanso = false;
if( vacaciones || diaDescanso ){
    console.log("Padre puede asistir al juego");
}else{
    console.log("El padre eat ocupado");
}

//Operador Ternario
let resultado = ( 3 > 2 ) ? "verdadero" : "falso";

let miNumero = "17";
let edad = Number(miNumero);
let res = edad >= 18 ? "Puede votar" : "Muy joven para votar";
console.log(res);

let numero = "18x";
let notANumber = Number(numero);
console.log(notANumber);

if( isNaN(notANumber )){
    console.log("No es un numero");
} else {
    console.log("Es numero");
}

let result = isNaN(notANumber) ? "No es numero" : "Es numero";