class DispositivoDeEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get TipoEntrada(){
        return this._tipoEntrada
    }
    set TipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get Marca(){
        return this._marca
    }
    set Marca(marca){
        this._marca = marca; 
    }
}

class Raton extends DispositivoDeEntrada{
    
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super (tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones;
    }

    get IdRaton(){
        return this._idRaton;
    }

    toString(){
        return `
                Id del Ratón:   ${this._idRaton}
                Tipo de Entrada ${this._tipoEntrada}
                Marca:          ${this._marca}`;
    }
}

class Teclado extends DispositivoDeEntrada{
    
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get IdTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `
                Id del Teclado:  ${this._idTeclado}
                Tipo de Entrada: ${this._tipoEntrada}
                Marca:           ${this._marca}`;
    }
}

class Monitor{

    static contadorMonitores = 0;

    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get IdMonitor(){
        return this._idMonitor;
    }

    get Marca(){
        return this._marca
    }
    set Marca(marca){
        this._marca = marca;
    }

    get Tamano(){
        return this._tamano;
    }
    set Tamano(tamano){
        this._tamano = tamano;
    }

    toString(){
        return `
                Id del Monitor: ${this._idMonitor}
                Marca:          ${this._marca}
                Tamaño:         ${this._tamano}`;
    }
}

class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get IdComputadora(){
        return this._idComputadora;
    }

    get Nombre(){
        return this._nombre
    }
    set Nombre(nombre){
        this._nombre = nombre; 
    }

    get Monitor(){
        return this._monitor;
    }
    set Monitor(monitor){
        this._monitor = monitor;
    }

    get Teclado(){
        return this._teclado;
    }
    set Teclado(teclado){
        this._teclado = teclado;
    }

    get Raton(){
        return this._raton;
    }
    set Raton(raton){
        this._raton = raton;
    }

    toString(){
        return `Id de Computadora:  ${this._idComputadora}
        Computadora:        ${this._nombre}
                Información del Monitor: ${this._monitor}
                Información del Teclado: ${this._teclado}
                Información del Ratón:   ${this._raton}
        `;
    }
}

class Orden{

    static contadorOrdenes = 0;

    static get NumeroMaximoDeComputadoraXOrden(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = [];
    }

    agregarComputadora(computadora){
        if(this._computadora.length < Orden.NumeroMaximoDeComputadoraXOrden)
            this._computadora.push(computadora);
        else{
            console.log('Limite de computadoras por orden alcanzado');
        }
    }

    get IdOrden(){
        return this._idOrden;
    }

    get Computadora(){
        return this._computadora;
    }
    set Computadora(computadora){
        this._computadora = computadora;
    }

    toString(){
        return `Id de Orden:    ${this._idOrden}
        ${this._computadora}
        `;
    }
}

let nuevoMouse1 = new Raton('USB', 'HP');
let nuevoMouse2 = new Raton('Cable', 'Dell');
let nuevoMouse3 = new Raton('USB', 'Lenovo');

let nuevoTeclado1 = new Teclado('Cable','Lenovo');
let nuevoTeclado2 = new Teclado('USB','Lenovo');
let nuevoTeclado3 = new Teclado('USB','HP');

let nuevoMonitor1 = new Monitor('HP','30');
let nuevoMonitor2 = new Monitor('Dell','30');
let nuevoMonitor3 = new Monitor('Lenovo','30');

let nuevoComputador1 = new Computadora('HP', nuevoMonitor1, nuevoTeclado3, nuevoMouse1);
let nuevoComputador2 = new Computadora('HP', nuevoMonitor2, nuevoTeclado1, nuevoMouse3);
let nuevoComputador3 = new Computadora('HP', nuevoMonitor3, nuevoTeclado1, nuevoMouse2);

let nuevoOrden1 = new Orden();
let nuevoOrden2 = new Orden();
let nuevoOrden3 = new Orden();

nuevoOrden1.agregarComputadora(nuevoComputador1)
console.log(nuevoOrden1.toString());