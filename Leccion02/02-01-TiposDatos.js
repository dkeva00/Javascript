//tipo string
var nombre = "Nami";
console.log(nombre);

//tipo int
var numero = 5;
console.log(numero);

//tipo object
var objeto = {
    nombre : "Brisa",
    apellido : "Quezada"
}
console.log(objeto);

console.log(typeof objeto);
console.log(typeof nombre); 

//tipo boolean
var bandera = false;
console.log(bandera);

//tipo function
function miFuncion(){}
console.log(typeof miFuncion);

//tipo Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo); 

class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona); 

//tipo undefined
var x;
console.log(x);
console.log(typeof x); 

//tipo null = ausencia de valor
var y = null;
console.log(typeof y);

//tipo array
var autos = ['BMW','Audi','Mazda'];
console.log(autos);
console.log(typeof autos);

//vacio
var z = '';
console.log(z);

let a, b;
a = 10, b = 20;
let c = a + b;