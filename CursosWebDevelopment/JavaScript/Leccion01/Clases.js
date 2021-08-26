// Cuando trabajamos con clases no se aplica el concepto de Hoisting el cual consiste en que
// podemos mandar llamar a la clase(en este caso) lineas antes de ser creada (como sucede con las
// funciones o metodos). Para poder hacer uso de una clase, esta ya debe estar creada previamente

// Definimos una clase con nombre 'Persona' y le asignamos 2 parametros 
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
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){    // le agregamos los parametro de la clase padre
        super(nombre, apellido);    // Esta línea está mandando a llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    // Concepto de sobreescritura es es cuando dentro de la clase hija modificamos un metodo de la clase padre
    nombreCompleto(){
        // return this._nombre + ' ' + this._apellido + ' de ' + this._departamento;
        return super.nombreCompleto() + ' de ' + this._departamento
    }
}
// Creamos 2 objetos, 'persona1' y 'persona2'
let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let persona2 = new Persona('Carlos', 'Lara');
console.log( persona2 );

// Aquí mandamos llamar la funcion get de la clase 'Persona'
console.log(persona1.nombre);

// Aquí mandamos llamar la funcion set de la clase 'Persona' y le asignamos un nuevo valor
persona1.nombre = "Chuy";
console.log(persona1.nombre);

// En la siguiente línea se demuestra como tambien podemos obtener el nombre mandando llamar
//  a '._nombre' pero por buenas practicas se considera mejor hacerlo con los metodos de Get y Set
console.log(persona1._nombre);

// Creamos un objeto de la clase hija
let empleado1 = new Empleado('Chuy', 'Zavedra', 'Sistemas');
console.log(empleado1);
console.log(empleado1._departamento);

// Mandamos llamar al metodo 'nombreCompleto' de la clase padre 
console.log(empleado1.nombreCompleto());
