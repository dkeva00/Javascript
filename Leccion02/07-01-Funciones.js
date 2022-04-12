//Hoisting
miFuncion(8,2);

function miFuncion(a,b){
    console.log("Suma: " + (a + b));
}

miFuncion(5,3);

function test(c,d){
    console.log(arguments.length)
    return c + d;
}

let resultado = test(10, 28);
console.log(resultado);

//Declaracion Funcio tipo Expresion
let suma = function(a, b){ return a + b; };

resultado = suma(1,2);
console.log(resultado);

//funcion anonima, solo se puede mandar llamar a si misma, una sola ocasion
(function(a, b){
    console.log("Ejecutando la funcion suma: " + (a + b));
})(3, 4);

console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Funciones tipo expresion flecha
const sumarFuncionTipoFlecha = (c, d) => c + d;
res = sumarFuncionTipoFlecha(5, 6);
console.log(res);

let sumar = function(x, y){
    console.log(arguments[0]);
    console.log(arguments[1]);
    //arguments[0];
    return x + y;
}

res = sumar();
console.log(res);

let sumar2 = function(x = 5, y = 8){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    //arguments[0];
    return x + y;
}

res = sumar2();
console.log(res);

res = sumar2(15, 80);
console.log(res);


res = sumar2(15, 80, 25);
console.log(res);

let result = sumarTodo(5, 4, 10, 13, 9, 8);
console.log(result);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i ++){
        suma += arguments[i];
    }
     return suma;
}

//paso por valor
//tipos primitivos, no tienen metodos ni atributos asociados al valor
let x = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(x);
console.log(x);


//paso por referencia
const persona =  {
    nombre : "Nami",
    apellido  : "Rei"
}
console.log(persona);

function cambiarValorObjeto(p1){
    p1.nombre = "Brisa";
    p1.apellido = "Ayanami";    
}

cambiarValorObjeto(persona);
console.log(persona);