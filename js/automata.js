class Automata{

    transiciones;
    estadoActual;

    constructor(transiciones, estadoInicial){
        this.transiciones = transiciones;
        this.estadoActual = estadoInicial;
    }

    proximoEstado(movimiento){
        const siguiente = transiciones[this.estadoActual][movimiento];
        this.estadoActual = siguiente;
        return this.estadoActual;
    }
}