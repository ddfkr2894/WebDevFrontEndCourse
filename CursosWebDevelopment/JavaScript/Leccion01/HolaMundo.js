// ----------------------------------------
// ------------     INTRODUCCION A JAVA SCRIP 
// ----------------------------------------

var variable1 = "Hola! :)";
var variable2= "cómo andas carnal?"

console.log(variable1);
console.log(variable2);


// -----------------------------------------------------------
// Variable de tipo cadena
var nombre = "Carlos";
console.log(nombre);

// Variable con una cadena vacía
var cadenaVacia = "";
console.log(cadenaVacia);
console.log(typeof cadenaVacia);

//  Variabl de tipo entero
var numero = 100;
console.log(numero);

// Variable de tipo objeto
var objeto = {
    nombre : "Carlos Abraham",
    apellido : "Cruz Mancilla",
    edad : 26
}
console.log(objeto)

// Variable de tipo booleano
var bandera = false;
console.log(bandera);

// Variable de tipo función
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

// Variable de tipo simbolo
var simbolo = Symbol();
console.log(simbolo);
console.log(typeof simbolo);

// Las clases en java script tambien son funciones
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona)
console.log(typeof persona)

// Tipo de dato undefined
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);

// null = Ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

// Los arreglos, que son de tipo object
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos)
console.log(typeof autos)

var listaDeNumeros = [1,2,3,4,5];
console.log(listaDeNumeros);
console.log(typeof listaDeNumeros);


// En Java Script las variables pueden ser dinamicas lo cual quiere decir que se les puede reasignar un valor 
// con un diferente tipo de dato
var nombre = "Carlos";
console.log(nombre);

var nombre = 100;
console.log(nombre);
// Se puede observar como la segunda vez que se imprime el valor de 'nombre' este arroja el segundo valor definido

// Se puede saber que tipo de dato nos está arrojando esa variable añandiendole Typeof como parametro dentro de log
console.log(typeof nombre)

// ------------------------------------------------------------------
                                    // Concatenaciones
var nombreAlumno = "Carlos";
var apellidoAlumno = "Cruz";

var nombreCompletoDelAlumno = nombreAlumno + " " + apellidoAlumno;

console.log(nombreCompletoDelAlumno);
console.log(nombreAlumno + " " + apellidoAlumno)
// ------------------------------------------------------------------
                                    // Operadores de Comparación

let a = 3, b = 2,  c = "3";

let z = a == b;     // Se revisa el valor sin importar el tipo de dato que se está comparando
console.log(z);

z = a === c;        // REVISION ESTRICTA Se revisan los valores pero tambien el tipo de dato que se compara
console.log(z);

let zz = a != b;    // De igual forma se revisa el valor sin importar el tipo de dato
console.log(zz);

zz = a !== c;       // REVISION ESTRICTA Revisa los valores pero tambien los tipos de datos
console.log(zz);

//-------------------------------------------------------------------
                                    // Pequeñas pruebas de lo visto hasta este punto:

let numeroIngresado = 10;

if (numeroIngresado % 2 == 0){
    console.log("El número es par");
}
else{
    console.log("El número es impar");
}
//  ....    .....   .....
let edadAsignada = 10, mayoriaDeEdad = 18;

if (edadAsignada >= mayoriaDeEdad){
    console.log("Si es mayor de edad");
}
else{
    console.log("No es mayor de edad");
}
//-------------------------------------------------------------------
                                    // Operadores

// && Ampersan

// || OR (Sólo si ambos parametros son falsos regresa FALSO, de lo contrario regresará VERDADERO)

// Operador Ternario:
// Es como la expresion de IF - ELSE. Solo que simplifcada, ya que tenemos la condicón al principio y seguido del 
// simbolo '?' tenemos lo que se retornará en cada caso. Tenemos que declarar una variable donde se aloje el resultado
// de la epresión.
let resultado = (3 > 2) ? "Verdadero" : "Falso";
console.log(resultado);
//-------------------------------------------------------------------
                                    // Convertir string a entero
let miNumero = "20";

let edad = Number(miNumero);
let resultadoStringAEntero = (edad >= 18) ? "Puede Votar" : "Muy joven para votar";
console.log(resultadoStringAEntero);
//--------------------------------------------------------------------
                                    // Para comprobar si un dato es Nan o 'Not a Number'
let otroNumero = "20x";
let otraEdad = Number(otroNumero);
console.log(otraEdad);

if(isNaN (otraEdad)){
    console.log("No es un número");
}
else{
    if(otraEdad >= 18){
        console.log("Puede votar")
    }
    else{
        console.log("Muy joven para votar")
    }
}
//---------------------------------------------------------------------
                                    // Pequeñas pruebas de lo visto hasta este punto:
// Para este ejercicio de precesdencia de operadores es necesario activar 
// el debuger para ir viendo el valor de cada variable y entenderlo mas facilmente
let e = 5;
let f = 10;
let g = ++e + f--;

console.log(e);
console.log(f);
console.log(g);