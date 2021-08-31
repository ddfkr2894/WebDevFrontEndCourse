// Funciones normales
function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//Función de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}
// Tambien podría ser escrito de esta forma y es exactamente lo mismo
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

// En vez del tercer parametro fucnionCallback, podríamos colocar directamente el nombre de 
// la fucnion que vamos a mandar llamar
function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3, imp);

//Llamadas asíncronas con uso setTimeout
function miFuncionCallback(){
    console.log('saludo asíncrono después de 3 seg');
}

// ------------------------------------------------------
//  Set Timeout

setTimeout(miFuncionCallback, 3000);//después de 3 seg

setTimeout( function(){ console.log('saludo asíncrono 2')}, 4000);

setTimeout( () => console.log('saludo asíncrono 3'), 1000);

// ------------------------------------------------------
//  Set Interval
let reloj = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);