//TTipo primitivo, no ttiene metodos
let x = 10;
console.log(x.lenght);

let persona = {
    nombre: 'Brisa',
    apellido: 'Ayanami',
    email: 'test@test.com',
    edad: 9,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    },
    miFuncion: function(){}
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombreCompleto());

console.log(persona);

let persona2 = new Object();
persona2.nombre = 'Peke';
persona2.apellido = 'Ayanami';
persona2.usuario = 'littleRockie';
persona2.pass = '122345678';

console.log(persona2.usuario);

//acceso propiedades objeto
console.log(persona.apellido);
console.log(persona['nombre']);

//for in para acceder a las propiedades de un objeto 
for( nombrePropiedad in persona ){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

persona.tel = '5555555555';
persona.tel = '8888888888';

console.log(persona);
console.log(persona.tel);

delete persona.tel;
console.log(persona);

let personArray = Object.values(persona);
console.log(personArray);

let personaString = JSON.stringify(persona);
console.log(personaString);


//
let persona3 = {
    nombre: 'Brisa',
    apellido: 'Ayanami',
    email: 'test@test.com',
    edad: 9,
    idioma: 'es',
    get language(){
      return this.idioma.toUpperCase();
    },
    set language( lang ){
      this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona3.nombreCompleto);
console.log(persona3.language);

persona3.language = 'en';
console.log(persona3.language);
console.log(persona3.idioma);

//Funcion Constructor de objetos
function Persona(nombre1, apellido, email){
   this.nombre = nombre1;
   this.apellido = apellido;
   this.email = email;
  this.nombreCompleto = function(){
    return this.nombre + ' ' + this.apellido;
  }
}

let padre = new Persona('Kaworu','Nagisa','Eva05@seele.com');
console.log(padre);

let madre = new Persona('Rei','Ayanami','Eva00@nerv.com');
console.log(madre);
console.log( madre.nombreCompleto() );

padre.nombre = 'Gendo';
console.log(padre);
console.log( padre.nombreCompleto() );

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolena = new Boolean(false);
let miBoolena2 = false;

let miArreglo = new Array(1,2,3);
let miArregle = [1,2,3];

let miFuncion = new Function();
let miFuncion2 = function(){};

//ProtoType - AGREGA PROPIEDAD a todos los objetos de tipo persona, en este caso tel
Persona.prototype.tel = '8888888888';
console.log(padre.tel);
console.log(madre.tel);

//una vez creada la propiedad, se puede modificar para cada caso
padre.tel = '5555555555'
console.log(padre.tel);
console.log(madre.tel);

let persona1 = {
  nombre: 'Ichigo',
  apellido : 'Kusrosaki',
  nombreCompleto : function(){
    return this.nombre + ' ' + this.apellido;
  }
}

let persona4 = {
  nombre : 'Renji',
  apellido : 'Abarai'
}

console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call());
console.log(persona1.nombreCompleto('Lic','9874563210'));
console.log(persona1.nombreCompleto.call(persona4));
console.log(persona1.nombreCompleto.call(persona4, 'Ing', '1234567890'));


console.log(persona1.nombreCompleto.apply(persona4));

let arreglo = ['Ing','6541239870'];
console.log(persona1.nombreCompleto.apply(persona4, arreglo));
console.log(persona1.nombreCompleto.apply(persona4, ['Ing','6541239870']));