let x = 10;
console.log(x.length);

// ------------------------------------------------------------
                                // Así es como creamos un objeto (lo más comúnmente)
// El operador 'this' funciona sobre los valores del objeto que está trabajando
// en ese momento.
let persona = {
    nombre: 'Chuy',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'español',
    
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    },

    get obtenerNombre(){
        return this.nombre + ' ' + this.apellido;
    },

    set asignarIdioma(idioma){
        this.idioma = idioma.toUpperCase();
    }
}

// Formas de acceder a los indices dentro del objeto
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());
console.log(persona['apellido'])

// Se muestran todos los datos del objeto
console.log(persona);

// Esta es otra sintaxis para crear un nuevo objeto 
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log( persona2.tel );

// ------------------------------------------------------------
                                                        // For-In
// Es un ciclo que podemos utilizar para recorrer todos los atributos que tenemos dentro de un objeto
// En la primera línea dentro del código podemos acceder al nombre de cada una de las propiedades
// En la segunda línea dentro del código podemos acceder al contenido dentro de las propiedades
for (propiedades in persona){
    console.log(propiedades);
    console.log(persona[propiedades])
}

// Para agregar una nueva propiedad
persona.tel = '556462555';
console.log(persona.tel);

// Para eliminar una nueva propiedad
console.log(persona)
delete persona.tel
console.log(persona)

// Imprimir concatenando
console.log(persona.nombre + ', ' + persona.apellido)

// Imprimir utilizando la sintaxis de object.values, el cual es un metodo que nos regresa 
// nuestro objeto como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

// Imprimir utilizando JSON.stringify el cual es un metodo que convierte los valores de 
// cada propiedad del objeto a cadena
let personaString = JSON.stringify(persona);
console.log(personaString);

// ------------------------------------------------------------
                                                            // Metodos GET y SET
// En el curso se crea un nuevo metodo dentro del objeto 'persona para mandar imprimir 
// 2 valores el nombre del metodo sera 'obtenerNombre' con un GET antes del nombre y su 
// función será simplmenete imprimir tanto el nombre como el apellido. 
// A continuación sólo se mandará llamar
console.log(persona.obtenerNombre);

// Ahora creamos 1 nuevo metodo dentro del objeto 'persona' en el cual emplearemos SET y
// le llamaremos asginarIdioma y de igual forma lo mandaremos setearse en mayusuclas
// cabe mencionar que los Setter siempre deben contener al menos un párametro
// A continuaciín imprimimos el valor de la propiedad 'idioma'
console.log(persona.idioma);
// usamos el metodo creado con SET
persona.asignarIdioma = "esp-latinoamerica-mex"
console.log(persona.idioma);

// ------------------------------------------------------------
                                                            // Constructores
// Si queremos poder reutilizar codigo cada vez que queramos crear un objeto de algun tipo 
// podemos crear un constructor.
// El operador 'this' funciona sobre los valores del objeto que está trabajando
// en ese momento.
// A continuación se define una función constructor para crear un objeto de tipo persona con 3 atributos
function Persona(nombreParametro, apellidoParamtro, emailParametro){
    this.nombre = nombreParametro;          // this.nombre hace referencia al nombre del atributo
    this.apellido = apellidoParamtro;
    this.email = emailParametro;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Una forma de agregar una nueva propiedad al objeto 'Persona' será con 'prototype'
Persona.prototype.empresa = 'Omnitracs'

// Hacemos uso del constructor para crear nuevos objetos de tipo Persona usando 
// la palabra reservada 'new'
let padre = new Persona('Carlos', 'Cruz' ,'ddfkr2895@gmail.com');
console.log(padre);
console.log(padre.empresa);
// Segundo objeto
let madre = new Persona('Aljenadra', 'Jimenez' ,'lslsksjdhd@gmail.com');
console.log(madre);
console.log(madre.empresa);

// Se modifica el valor de la propiedad del objeto 'Padre'
padre.nombre = 'Carlos Abraham'
console.log(padre);

// Mandamos llamar la función creada de 'nombreCompleto'
console.log(padre.nombreCompleto())

// ------------------------------------------------------------
                                            // Distintas formas de crear diferentes tipos de objetos
// la forma de arriba se podría decir que es la mas formal pero la mas común que se ocupa
// icnluso por buenas practicas es la de abajo, ambas son correctas y llegan al mismo resultado
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};

// ------------------------------------------------------------
                                                    // Función Call en Java Script
// En este ejemplo se crean 2 objetos con los mismos atributos.
// El objeto 'persona3' cuenta con una funcion que imprime los atributos nombre y apellido
// en cambio en el objeto 'persona4' no tiene ese atributo sin embargo el segundo objeto
// puede hacer uso de de la funcion de 'persona3' con el uso de call como se muestra 
// a continuación.

let persona3 = {
    nombre: 'Rosa',
    apellido: 'Melano',
    apellido2: 'Enduro',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido+  ' ' + this.apellido2 + ', ' + tel;
    }
}

let persona4 = {
    nombre: 'Larry',
    apellido: 'Atanave',
    apellido2: 'Noza'
}

// Nota: a la función nombreCompleto trabaja con 2 parametros que son titulo y telefono, notese que cuando se manda
// llamar el metodo para el uso de 'persona3' se escriben sólo los argumentos que serán usados
// y al ser usados por 'persona4' se escribe persona3.nombreCompleto.call( persona4, 'Ing', '5544332211' )
//Uso de call para usar el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona3.nombreCompleto('Lic.', '44332288') );
console.log( persona3.nombreCompleto.call( persona4, 'Ing', '5544332211' ) );

// ------------------------------------------------------------
                                                    // Función Apply en Java Script
// Usamos practicamente el codigo que usamos para crear el objeto 'persona3' sólo que sin 
// los parametros que recibía su funcion nombreCompleto y vemos que la funcion o metodo 'Apply'
// funciona practicamente de la misma forma que 'call'
let persona5 = {
    nombre: 'Tupú',
    apellido: 'Tamaré',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

let persona6 = {
    nombre: 'Larry',
    apellido: 'Atave',
    apellido2: 'Noza'
}

console.log(persona5.nombreCompleto());
console.log(persona5.nombreCompleto.apply( persona6));

// Ahora usaremos 'apply' con una funcion que tenga parametros
let persona7 = {
    nombre: 'Tupú',
    apellido: 'Tamaré',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido+  ' ' + this.apellido2 + ', ' + tel;
    }
}

let persona8 = {
    nombre: 'Larry',
    apellido: 'Atanave',
    apellido2: 'Noza'
}

console.log(persona7.nombreCompleto('Lic', '66666666'));
// En la siguinete línea se creara un arreglo con los valores de los argumentos
// para poder pasar al metodo nombreCompleto
let arreglo = ['Ing' ,'5564646464'];   // Se pasan los valores de los argumentos que vamos a pasar al metodo nombreCompleto
console.log(persona7.nombreCompleto.apply(persona8, arreglo));
