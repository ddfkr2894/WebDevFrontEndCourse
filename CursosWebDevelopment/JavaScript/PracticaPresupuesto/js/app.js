const ingresos = [
    new Ingreso('Salario', 9,000),
    new Ingreso('Venta de Coche', 500),
    new Ingreso('caca', 200)
];

const egresos = [
    new Egreso('Renta de Departamento', 900),
    new Egreso('Ropa', 400)
];

let cargarApp = () =>{
    cargarEncabezado();
    cargarIngresos();
    cargarEgresos();
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

const cargarIngresos = () =>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso._descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso._valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-outline"
                    onclick="eliminarIngreso(${ingreso._id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const eliminarIngreso = (ID) =>{
    let indiceAEliminar = ingresos.findIndex(ingreso => ingreso._id===ID);
    ingresos.splice(indiceAEliminar, 1);
    cargarEncabezado();
    cargarIngresos();
}

const cargarEgresos = () =>{
    let egresosHTML = '';
    for (let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso)
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) =>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso._descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso._valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso._valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-outline"
                    onclick="eliminarEgreso(${egreso._id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (ID) =>{
    let indiceAEliminar = egresos.findIndex(egreso => egreso._id===ID);
    egresos.splice(indiceAEliminar, 1);
    cargarEncabezado();
    cargarEgresos();
}