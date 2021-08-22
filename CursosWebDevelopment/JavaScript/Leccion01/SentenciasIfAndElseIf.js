// En Java Scritp tenemos el uso de IF, de ELSE IF, y de ELSE dónde en el uso de ELSE IF
// se puede anclar una condicón mas a la condición original, a diferencia de ELSE que es simplemente
// lo que sucede si la primera condción no se cumple
let numero = 1;
 if (numero == 1){
    console.log("Numero uno");
 }
 else if (numero == 2){
    console.log("Numero dos");
 }
 else if (numero == 3){
    console.log("Numero tres");
 }
 else if (numero == 4){
    console.log("Numero cuatro");
 }
 else{
     console.log("Numero desconocido");
 }
//  ----------------------------------------------------
// Pequeño algoritmo para cambiar la variable 'mes' y así saber que mes y a que estación
// del año pertencen el valor asignado en tal variable

let mes = 50;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
    if(mes == 1){
        mes = "Enero";
    }
    if(mes == 2){
        mes="Febrero";
    }
    if(mes == 12){
        mes="Diciembre";
    }
    console.log(mes + " pertenece a la estación de " + estacion );
}
else if (mes == 3 ||mes == 4 ||mes == 5){
    estacion = "Primavera";
    if(mes == 3){
        mes = "Marzo";
    }
    if(mes == 4){
        mes="Abril";
    }
    if(mes == 5){
        mes="Mayo";
    }
    console.log(mes + " pertenece a la estación de " + estacion );
}
else if (mes == 6 ||mes == 7 ||mes == 8){
    estacion="Verano"
    if(mes == 6){
        mes = "Junio";
    }
    if(mes == 7){
        mes="Julio";
    }
    if(mes == 8){
        mes="Agosto";
    }
    console.log(mes + " pertenece a la estación de " + estacion );
}
else if (mes == 9 ||mes == 10 ||mes == 11){
    estacion="Otoño"
    if(mes == 9){
        mes = "Sepiembre";
    }
    if(mes == 10){
        mes="Octubre";
    }
    if(mes == 11){
        mes="Noviembre";
    }
    console.log(mes + " pertenece a la estación de " + estacion );
}
else{
    estacion="Valor Incorrecto, no hay mes"
    console.log(estacion + " " + mes + " no me chingues cabrón.")
}
// --------------------------------------------------------
// Pequeño ejercicio para mandar la cadena de la derecha si se asgina el un 
// valor entre el rango de la izquierda
// 6-11 - buenos días
// 12-18 - buenas tardes
// 19-24 - buenas noches
// 0-6 - Durmiendo

let hora = 50;

if(hora <= 6){
    console.log("Durmiendo");
}
else if(hora >= 7 && hora <= 11){
    console.log("Buenos días");
}
else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
}
else if(hora >= 19 && hora <= 24){
    console.log("Buenas noches");
}
else{
    console.log("No hay hora " + hora + " no me chingues pinshi prro verguero");
}