const ultimo = document.getElementById('ultimo');
const historial = document.getElementById('historial');
const contenido = document.getElementById('contenido');
const mostrar = document.getElementById('mostrar');
const mensaje = document.getElementById('mensaje');
const automata = new Automata(transiciones, 0);
let show = false;

const player = `
    <div class="spinner-grow text-light player" role="status">
        <span class="sr-only">Loading...</span>
    </div>`;

mostrar.addEventListener('change', e => {
    show = mostrar.checked;
    renderBoard()
    move(automata.estadoActual, player);
});

const functions = {
    'ArrowUp': () => performButton(0),
    'ArrowDown': () => performButton(2),
    'ArrowRight': () => performButton(1),
    'ArrowLeft': () => performButton(3),
};

const simbolos = [
    '<i class="fas fa-arrow-circle-up mx-1"></i>',
    '<i class="fas fa-arrow-circle-right mx-1"></i>',
    '<i class="fas fa-arrow-circle-down mx-1"></i>',
    '<i class="fas fa-arrow-circle-left mx-1"></i>'
];

const clases = [
    'border-top: 1px white solid;',
    'border-right: 1px white solid;',
    'border-bottom: 1px white solid;',
    'border-left: 1px white solid;',
];

function renderBoard(){
    let body = '';
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 5; j++){
            if( i === 0 && j == 2){
                body += `<div id="26"></div>`;
            }
            else if( i === 6 && j == 2){
                body += `<div id="0"></div>`;
            }else if(i > 0 && i < 6){
                const n = (i - 1)*5 + j + 1;
                const style = getStyle(n);
                body += `
                <div style="${ style }" id="${n}">
                </div>`;
            }else{
                body += '<div></div>'
            }
        }
    }
    contenido.innerHTML = body;
}

//Init
(()=>{
    renderBoard();
    move(0, player);
})();

function getStyle(n){  
    if( ! show ){
        return '';
    }
    let style = '';
    const movimientos = transiciones[n];

    movimientos.forEach((v, i) => {
        if( v === n ){
            style += clases[i];
        }
    });
    return style;
}

function performButton(control){
    ultimo.innerHTML = simbolos[control];
    historial.innerHTML += simbolos[control];
    const estadoActual = automata.estadoActual;
    const siguienteEstado = automata.proximoEstado(control);

    console.log({
        estadoActual,
        input: control,
        siguienteEstado
    });

    move(estadoActual, '');
    move(siguienteEstado, player);

    if(siguienteEstado == 26){
        mensaje.innerHTML = `<h3>¡Has ganado!</h3>`
    }
}

document.addEventListener('keydown', e => {
    e = e || window.event;
    const handler = functions[e.key];
    if(handler){
        handler();
    }
});

function move(id, content){
    const celda = document.getElementById(id);
    celda.innerHTML = content;
}