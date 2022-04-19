class Persona{

    static contadorPersonas = 1;

    constructor(idPersona, nombre, apellido, edad){
        this._idPersona = idPersona;
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
       return `${this._idPersona}  
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }
}