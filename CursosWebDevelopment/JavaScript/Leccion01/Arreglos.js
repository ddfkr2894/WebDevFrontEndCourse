// A continuación una forma muy antigua de declarar arreglos pero que ya no se
// acostumbra usar es la siguiente:
let autos = new Array("BMW", "Mercedes Benz", "Volvo");
// La anterior aparte de ser una forma muy antigua de declarar arreglos
// tampoco se recomienda seguir usandose.

// La siguiente forma es la que forma en la que actualmente se deben delclarar
// con el uso de 'const' antes del nombre de la variable y los corchetes en vez de parentesis.
const autosChidos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autosChidos);

// Para acceder a un elemento especifico del arreglo será así;
console.log(autosChidos[0]);
console.log(autosChidos[1]);
console.log(autosChidos[2]);

for(let i=0; i < autosChidos.length; i++){
    console.log("El auto número " + (i+1) + " es el " + autosChidos[i])
}

// Para modificar un valor existente
autosChidos[1] = "Mercedototote";
console.log(autosChidos[1]);

// Para ingresar un nuevo valor al arreglo usamos 'PUSH' sólo que el valor que 
// ingresemos será el último elemento del arreglo
autosChidos.push('Audi');
for(let i=0; i < autosChidos.length; i++){
    console.log("El auto número " + (i+1) + " es el " + autosChidos[i])
}
// Para conocer el número de elementos existentes dentro del arreglo
console.log(autosChidos.length);

// Pregunta si es un array
console.log(typeof autosChidos);

console.log(Array.isArray(autosChidos));

console.log(autosChidos instanceof Array);
// En la línea anterior lo que estamos preguntando es si la variable 'autosChidos' es una instancia de tipo Array