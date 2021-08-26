// Cuando trabajamos con clases no se aplica el concepto de Hoisting el cual consiste en que
// podemos mandar llamar a la clase(en este caso) lineas antes de ser creada (como sucede con las
// funciones o metodos). Para poder hacer uso de una clase, esta ya debe estar creada previamente

// Definimos una clase con nombre 'Persona' y le asignamos 2 parametros 
class Persona{

    //Definimos un atributo static dentro de nuestra clase (sólo se podra acceder a ella por medio de la clase
    // 'Persona' y sus clases herdedadas)
    static contadorDeObjetosPersona = 0;

    // Definimos un atributo No Static al cual si podremos acceder a él mediante nuestros objetos creados
    email = 'Valor X default'

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        Persona.contadorDeObjetosPersona++
        console.log("Se incrementa variable 'contadorDeObjetosPersona': " + Persona.contadorDeObjetosPersona);
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

    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
    
    // Metodo static 'saludar' dentro de nuestra clase 'Persona'
    static saludar(){
        console.log("Saludos desde metodo static");
    }
    // Otro metodo static dentro de nuestra 'Persona' con un objeto como parametro
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    static contadorDeObjetosEmpleado = 0;

    constructor(nombre, apellido, departamento){    // le agregamos los parametro de la clase padre
        super(nombre, apellido);    // Esta línea está mandando a llamar al constructor de la clase padre
        this._departamento = departamento;
        Empleado.contadorDeObjetosEmpleado++;
        console.log("Se incrementa variable 'contadorDeObjetosEmpleado': " + Empleado.contadorDeObjetosEmpleado);
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

// A continuación en la siguiente línea podemos ver como no es posible mandar al metodo static 'saludar' 
// desde el objeto 'persona1'
// persona1.saludar();
// Sin embargo si es posible mandarlo llamar desde una clase
Persona.saludar();

// Mandamos llamar nuestro segundo metodo static de la clase 'Persona' asignadole como
// argumento el objeto 'persona1'
Persona.saludar2(persona1);

// Mandamos llamar nuestros metodos static de la clase 'Persona' desde la clase hija 'Empleado'
// asignadole como argumento el objeto 'empleado1'
Empleado.saludar();
Empleado.saludar2(empleado1);

// Mandamos llamar nuestro atributo No Estatic 'email' desde nuestros objetos creados
console.log(persona1.email);
console.log(persona2.email);
console.log(empleado1.email);

// Intentamos mandar llamar nuestro aitrbuto No estatic desde nuestras clases padre e hija 
// y podemos ver como nos marca error 'Undefined' ya que para poder acceder con clases necesitariamos
// tener atributos estatics
// console.log(Persona.email);
// console.log(Empleado.email);
// Ambas lineas marcarn undefined

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// A coninuación creamos otra clase 'perro' para hacer un breve ejercicio en el cual cada vez
// que creemos un nuevo objeto de esta clase estaremos asignadole un 'ID' por medio de la variable
// estatica 'contadorDeObjetosPerro'.
class Perro{
    
    static contadorDeObjetosPerro = 0;
    
    // Crearemos una variable estatica que no pueda ser modificada como lo hacemos con las variables 'const'.
    static get NumeroMaximoDeObjetosPerro(){
        return 5;
    }
    
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Perro.contadorDeObjetosPerro < Perro.NumeroMaximoDeObjetosPerro){
            this._idPerro = ++Perro.contadorDeObjetosPerro;
        }
        else{
            console.log('Alncazaste el número maximo de objetos perro');
        }
    }

    nombreCompleto(){
        return 'ID ' + this._idPerro + ': ' + this._nombre + ' ' + this._apellido;
    }
    
    toString(){
        return this.nombreCompleto();
    }
}

let perro1 = new Perro('Wero', 'Rodriguez');
console.log(perro1.toString());

let perro2 = new Perro('Justin', 'Wieber');
console.log(perro2.toString());

let perro3 = new Perro('Tita', 'LaGorda');
console.log(perro3.toString());

// Imprimos el valor de 'NumeroMaximoDeObjetos'
console.log(Perro.NumeroMaximoDeObjetosPerro);

// Intentamos modificar el valor de 'NumeroMaximoDeObjetos' y reimprimimos para verificar que no fue posible
// ya que no fue definido un metodo set dentro de la clase 'Perro'
Perro.NumeroMaximoDeObjetos = 10;
console.log(Perro.NumeroMaximoDeObjetosPerro);


// Creamos los objetos faltantes para llegar hasta nuestro limite de objetos tipo Perro y podemos ver
// como el sexto perro no cuenta con un ID ya que superó el limite de objetos por crear permitidos.
let perro4 = new Perro ('Bethoven', 'Zabloudowsky');
console.log(perro4.toString());
let perro5 = new Perro ('Flofy', 'Potter');
console.log(perro5.toString());
let perro6 = new Perro ('Suput', 'Amare');
console.log(perro6.toString());