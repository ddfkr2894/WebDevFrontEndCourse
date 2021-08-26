class Persona{

    static contadorPersona = 0;

    constructor(nombre='defalut', apellido='default', edad=0){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersona;
    }

    get idPersona(){
        return this._idPersona;
    }

    get Nombre(){
        return this._nombre;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }

    get Apellido(){
        return this._apellido;
    }
    set Apellido(apellido){
        this._apellido = apellido;
    }

    get Edad(){
        return this._edad;
    }
    set Edad(edad){
        this._edad = edad;
    }

    mostrarDatos(){
        // return 'Persona: ' + this._idPersona + ' Nombre: ' + this._nombre + ' ' + this._apellido + ' Edad: ' + this._edad;
        return  `
                    Persona: ${this._idPersona}
                    Nombre: ${this._nombre} ${this._apellido}
                    Edad: ${this._edad}
                `;
    }
}

class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor(nombre='defalut', apellido='default', edad=0, sueldo=0){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get Sueldo(){
        return this._sueldo;
    }
    set Sueldo(sueldo){
        this._sueldo = sueldo;
    }

    mostrarDatos(){
        return super.mostrarDatos() + ' Sueldo: $' + this._sueldo;
    }

    mostrarDatosEmpleado(){
        return `
                Persona: ${this._idPersona}
                No. de Empleado: ${this._idEmpleado}
                Nombre: ${this._nombre} ${this._apellido}
                Edad: ${this._edad}
                Sueldo: ${this._sueldo}
                `;
    }
}

class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre='defalut', apellido='default', edad=0, fechaDeRegistro=0){
        super(nombre, apellido, edad);
        this._fechaDeRegistro = fechaDeRegistro;
        this._idCliente = ++Cliente.contadorCliente;
    }

    get idCliente(){
        return this._idCliente;
    }

    get FechaDeRegistro(){
        return this._fechaDeRegistro;
    }
    set FechaDeRegistro(fechaDeRegistro){
        this._fechaDeRegistro = fechaDeRegistro;
    }

    mostrarDatos(){
        return super.mostrarDatos() + ' Fecha de Registro: ' + this._fechaDeRegistro;
    }

    mostrarDatosCliente(){
        return `
                    Persona: ${this._idPersona}
                    No. de Cliente: ${this._idCliente}
                    Nombre: ${this._nombre} ${this._apellido}
                    Edad: ${this._edad}
                    Fecha de Registro: ${this._fechaDeRegistro}
                `;
    }
}

let persona1 = new Persona('Abraham', 'Cruz', 26);
console.log(persona1.mostrarDatos());

let empleado1 = new Empleado('Abraham', 'Cruz', 26, 10000);
console.log(empleado1.mostrarDatos());
console.log(empleado1.mostrarDatosEmpleado());

let cliente1 = new Cliente('Abraham', 'Cruz', 26, new Date());
console.log(cliente1.mostrarDatos());
console.log(cliente1.mostrarDatosCliente());