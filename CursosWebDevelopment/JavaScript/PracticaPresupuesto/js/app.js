const ingresos = [
    new Ingreso('Salario', 5000.00),
    new Ingreso('Venta de Coche', 1500)
];

const egresos = [
    new Egreso('Renta de Departamento', 900),
    new Egreso('Ropa', 400)
];

let cargarApp = () =>{
    cargarEncabezado();
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso._valor;
    }
    return totalIngreso;
}

let totalEgresos = () =>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso._valor;
    }
    return totalEgreso;
}

let cargarEncabezado = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(presupuesto);
    document.getElementById('presupuesto').innerHTML = presupuesto;
    document.getElementById('porcentaje').innerHTML = porcentajeEgreso;
    document.getElementById('ingresos').innerHTML = totalIngresos();
    document.getElementById('egresos').innerHTML = totalEgresos();
}