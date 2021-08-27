class Producto{
    
    static contadorDeProducto = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorDeProducto;
    }

    get idProducto(){
        return this._idProducto;
    }

    get Nombre(){
        return this._nombre;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }

    get Precio(){
        return this._precio;
    }
    set Precio(precio){
        this._precio = precio;
    }

    mostrarProducto(){
        return `
                Id:         ${this._idProducto}
                Producto:   ${this._nombre}
                Precio:     $${this._precio}
                `;
    }
}

class Orden{

    static contadorDeOrdenes = 0;

    static get NumeroMaximoDeProductosXOrden(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorDeOrdenes;
        this._productos = [];
    }

    get idOrder(){
        return this._idOrden;
    }

    agregarProductosAOrden(producto){
        if (this._productos.length < Orden.NumeroMaximoDeProductosXOrden){
            this._productos.push(producto);
        }
        else{
            console.log("Se ha llegado al limite de prodcutos en esta orden");
        }
    }
    
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto._precio;//totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }
    
    mostrarOrden(){
        let productosDeOrden = '';
        for(let productos of this._productos){
            productosDeOrden += productos.mostrarProducto() + ' ';
        }

        console.log(`Orden: ${this._idOrden} 
                    Total: $${this.calcularTotal()} 
                    Productos: ${productosDeOrden} `);
    }
}

let gorro = new Producto('gorro', 200);
let chamarra = new Producto('Chamarra', 500);
let camisa = new Producto('Camisa', 200);
let cinturon = new Producto('Cinturon', 300);
let pantalon = new Producto('Pantalon', 200);
let boxer = new Producto('Boxers', 50);
let tenis = new Producto('Tenis', 600);
let calcetines = new Producto('Calcetines', 100);

let orden1 = new Orden();
let orden2 = new Orden();
let orden3 = new Orden();

console.log(gorro.mostrarProducto());
console.log(chamarra.mostrarProducto());
console.log(camisa.mostrarProducto());
console.log(cinturon.mostrarProducto());
console.log(pantalon.mostrarProducto());
console.log(boxer.mostrarProducto());
console.log(tenis.mostrarProducto());
console.log(calcetines.mostrarProducto());

orden1.agregarProductosAOrden(gorro);
orden1.agregarProductosAOrden(chamarra);
orden1.agregarProductosAOrden(camisa);
orden1.agregarProductosAOrden(cinturon);
orden1.agregarProductosAOrden(pantalon);
// orden1.agregarProductosAOrden(boxer);
orden1.calcularTotal();
orden1.mostrarOrden();

orden2.agregarProductosAOrden(gorro);
orden2.agregarProductosAOrden(chamarra);
orden2.agregarProductosAOrden(camisa);
orden2.agregarProductosAOrden(cinturon);
orden2.agregarProductosAOrden(pantalon);
orden2.calcularTotal();
orden2.mostrarOrden();