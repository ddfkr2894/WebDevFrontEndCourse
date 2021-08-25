// ------------------------------------------------------------ 
                                    // Declaración de una fucnión
function miFuncion(a, b){
    console.log(arguments.length);
    return a + b; 
}
// Arguments es una propiedad que nos ayuda a tener accesos a los argumentos 
// de la funcion en la que se está ocupando

                                    // Llama a la función
let resultado = miFuncion(5, 5);
console.log(resultado);

// ------------------------------------------------------------ 
                                    // Declaracion de una Función de tipo Expresión
let sumar = function(a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

// ------------------------------------------------------------ 
                                    // Funciones de tipo Self - Invoking
(function (a, b){console.log('Ejecutando función: ' + (a + b));})(3, 4);
// La siguientes líneas son exactamente la misma funcion de auto invocación sólo que con un formato
// de escritura. Se muestran ambos casos para entender bien la sintaxis.
// (function (a, b){
//     console.log('Ejecutando función: ' + (a + b));
// })(3, 4);

// ------------------------------------------------------------ 
                                    // Funciones como objeto
console.log(typeof miFuncion);

var miFuncionAhoraEnTexto = miFuncion.toString();
console.log(miFuncionAhoraEnTexto);

// ------------------------------------------------------------ 
                                    // Funciones tipo flecha
// Muy parecido a la funcion de tipo expresión sólo que con otro tipo de sintaxis
let restar = function(a, b){return a - b};

resultadoDeResta = restar(1, 2);
console.log(resultadoDeResta);

const restarFuncionTipoFlecha = (a, b) => a + b;
resultado = restarFuncionTipoFlecha(20, 10);
console.log(resultado);