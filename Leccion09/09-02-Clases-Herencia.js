//Herencia
//herdar caracteristicas desde una clase padre auna clase hija
//se agrega extends a la clase hija para heredar caracteristicas de la clase padre
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
    
    get apellido(){
        return this.apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    //herencia metodos
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}


class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        //manda llamar e constructor de la clase padre
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //sobreescritura
    //modificar el comportamiento de algun metodo en la clase padre
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Brisa','Nagisa');

let empleado1 = new Empleado('Sakura','Ayanami','Sales');
console.log(empleado1);
console.log(empleado1.departamento);

//Herencia Metodos
console.log(empleado1.nombreCompleto());

//sobreescritura
