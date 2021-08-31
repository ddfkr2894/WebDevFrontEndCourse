let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion)
        resolver ('Resolvió correcto');
    else
        rechazar ('Resolvió incorrecto');
});

// Ejecutando la promesa usando el metodo then
miPromesa.then(valor => console.log(valor), error => console.log(error));

// Ejecutando la promesa usando el metodo catch
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    console.log('inicio promesa');
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
    console.log('fin promesa');
});

promesa.then(valor => console.log(valor));


// ASYNC indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async mis prrrrrrotes'
}

miFuncionConPromesa().then(valor => console.log(valor));

// Ejmeplo de ASYNC con Await. Await sólo se puede usar dentro de una función 
//  declarada con ASYNC
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con Await mis prrros');
    });
    
    console.log(await miPromesa);
}

// El siguiente ejemplo pone en práctica las Promesas, Awaits, ASYNC's y setTimeOut
// definiiendo una funcion pero ahora esta promesa se resolvera despues de ciertos segundos
// cuando se ejecute la función de setTimeOut
async function funcionConPromesaAwaitTimeOut(){
    console.log('Inicio de la Función');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver ('Promesa con Await y TimeOut'), 3000);
    });
    console.log(await miPromesa);
    console.log('Fin de la Función');
}

funcionConPromesaAwaitTimeOut();