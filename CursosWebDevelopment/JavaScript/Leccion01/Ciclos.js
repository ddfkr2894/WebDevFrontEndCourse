// -----------------------------------------------------------------------------
                                                        // Estructuras SWITCH

let numero = 3;

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

console.log(numeroTexto);
// Default puede ir al principio de los casos o puede ir al final,
// si lo colocamos al principio tiene que llevar un 'break;' como los demas casos
// si lo colocamos hasta el final es totalmente opcional colocar o no el 'break;'
// -----------------------------------------------------------------------------
let mes = 11;
let estacion = 'Estación desconocida';

switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';                
}
console.log(estacion);
// -----------------------------------------------------------------------------
                                                        // Estructura WHILE
let contador = 0;

while( contador <= 3 ){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

// -----------------------------------------------------------------------------
                                                        // Estructura DO - WHILE
let otroContador = 0;

do{
    console.log(otroContador);
    otroContador++;
}while(otroContador < 3);
console.log("Fin ciclo do while");

// -----------------------------------------------------------------------------
                                                        // Estructura del ciclo FOR
for(let otroContadorMas = 0; otroContadorMas < 3 ; otroContadorMas++ ){
    console.log(otroContadorMas);
}
console.log("Fin ciclo for");

// -----------------------------------------------------------------------------
                                                        // Estructura del ciclo FOR con 'Break;'
for(let nuevoContador = 0; nuevoContador <= 10; nuevoContador++){
    if(nuevoContador % 2 != 0){
        console.log(nuevoContador);
        // Si queremos que sólo nos imprima el primer número inpar que encuentre le agregaremos 
        // el break para que sólo se ejecute una vez el código
        break;
    }
}
console.log("Fin del ciclo :)");

// -----------------------------------------------------------------------------
                                                        // Uso de la palbra reservada 'continue'
// Cuando vemos esta palabra reservada dentro de una condición por ejemplo:                 
for(let nuevoContador = 0; nuevoContador <= 10; nuevoContador++){
     if(nuevoContador % 2 != 0){
         continue;
     }
     console.log(nuevoContador);
}
// Le estamos indicando que si se llega a encontrar con un valor impar que se salte esa línea
// y se siga a la siguinete sentencia, en este caso, si se activa Quokka podríamos observar que
// sólo estarían imprimendo lo valores pares,  los inpares se estarían omitiendo
