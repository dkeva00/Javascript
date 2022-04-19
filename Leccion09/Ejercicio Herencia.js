class Persona{

    static contadorPersonas = 1;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

        this._idPersona = Persona.contadorPersonas++;
    }

    get idPersona(){
        return this._idPersona;
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

    get edad(){
        return this.edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
       return `${this._idPersona}  ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}


class Empleado extends Persona{

    static contadorEmpleados = 1;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo = sueldo;

        this._idEmpleado = Empleado.contadorEmpleados++;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 1;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._fechaRegistro = fechaRegistro;

        this._idCliente = Cliente.contadorClientes++;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}


let persona1 = new Persona('Brisa','Nagisa',9);
console.log(persona1.toString());

let persona2 = new Persona('Sakura','Ayanami', 4);
console.log(persona2.toString());

let persona3 = new Persona('Peke','Ayanami', 10);
console.log(persona3.toString());

let empleado1 = new Empleado('Sakura','Ayanami', 4, 999.99);
console.log(empleado1.toString());

let empleado2 = new Empleado('Shane','Ayanami', 13, 888.88);
console.log(empleado2.toString());

let cliente1 = new Cliente('Sakura','Ayanami', 4, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Rei','Ayanami', 13, new Date());
console.log(cliente2.toString());