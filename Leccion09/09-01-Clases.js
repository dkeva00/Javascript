//no es posible crear objetos antes de declarar la clase
//no se aplica el concepto de hoisting
//let persona2 = new Persona('Rei','Ayanami');

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Brisa','Nagisa');
console.log(persona1);
console.log(persona1._nombre);
console.log(persona1._apellido);

persona1.nombre = 'Peke';
console.log(persona1._nombre);

let persona2 = new Persona('Rei','Ayanami');
console.log(persona2._nombre);