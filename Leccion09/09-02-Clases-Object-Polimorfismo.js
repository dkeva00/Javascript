//clase object es el padre de todas las clases
//si no se pone el extends Object en la clase, javascripto lo hace de manera automatica
//la clase object contiene varios metodos
//prototype: permite agregar metodos o atributos de manera dinamica
Object.prototype.toString();

class Persona{

    static contadorPersonas = 0;
    static preContadorPersonas = 0;

    //atributo de nuestra clase, se acceden a traves de la clase
    static contadorObjetosPersona = 0;
    
    //atributo de nuestrop objeto, se accede a traves del objeto
    email = 'Valor por default email';

    //constante de tipo estatico, metodo estatico no modificable
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa contador: ' + Persona.contadorObjetosPersona);

        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = Persona.contadorPersonas++;
            this.idPrePersona = ++Persona.preContadorPersonas;
        }else{
            console.log('Se han superado el maximo de objetos permitidos');
        }

        
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
        return this.idPrePersona + ' - ' + this._nombre + ' ' + this._apellido;
    }

    //sobreescribiendo metodo toString de la clase padre
    toString(){
        //se aplica pòlimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde metodo static');
    }

    static saludar2(persona){
        console.log(persona.nombre);
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
console.log(persona1.toString());

let empleado1 = new Empleado('Sakura','Ayanami','Sales');
//Polimorfismo, desade un mismo objeto se puede mandar llamar el mettodo de la clase padre o hija
console.log(empleado1.toString());

//no es popsibkle llamar un metodo static desde un objeto
//persona1.saludar();
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);

//no se puede acceder por medio de la clase
console.log(Persona.email);
console.log(Empleado.email);

console.log(persona1.toString());

let persona2 = new Persona('Sakura','Ayanami');
console.log(persona2.toString());

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Peke','Ayanami');
console.log(persona3.toString());

let persona4 = new Persona('Nami','Nagisa');
console.log(persona4.toString());

let persona5 = new Persona('Shane','Nagisa');
console.log(persona5.toString());