let miFuncion = function (){
    console.log('saludos desde mi función');
}

// const miFuncionFlecha = () => {
//     console.log('saludos desde mi función flecha');
// }

// const miFuncionFlecha = () => console.log('saludos desde mi función flecha pinshis prrotes');

// miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde función flecha';
// }

// -------------------------------------------
const saludar = () => 'Saludos desde función flecha linea 18';

console.log( saludar() );


// -------------------------------------------
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log( regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

// const funcionConParametros = (mensaje) => console.log( mensaje );
const funcionConParametros = mensaje => console.log( mensaje );
funcionConParametros('saludos msi prrotes');


const funcionConVariosParametros = (op1, op2) => op1 + op2;
// const funcionConVariosParametros = (op1, op2) => {
//     let resultado = op1 + op2;
//     return `Resultado: ${resultado}`;
// };
console.log( funcionConVariosParametros(3,5));

