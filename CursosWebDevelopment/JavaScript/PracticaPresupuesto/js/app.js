const ingresos = [
    new Ingreso('Salario', 8000.00),
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
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString('en-US',{style: 'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}