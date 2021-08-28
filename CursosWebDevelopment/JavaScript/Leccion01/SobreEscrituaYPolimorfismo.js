class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: 
        Nombre: ${this._nombre}, Sueldo: ${this._sueldo}`;
    }
}

// En esta clase aplicamos sobreescritura del metodo 'obtenerDetalles'
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

// Aplicamos polimorfismo
function determinarTipo(tipo){
    console.log( tipo.obtenerDetalles() );
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

let empleado1 = new Empleado('Juan', 3000);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log(gerente1.obtenerDetalles());

imprimir(empleado1);
imprimir(gerente1);