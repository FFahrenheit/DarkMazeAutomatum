const ultimo = document.getElementById('ultimo');
const historial = document.getElementById('historial');
const contenido = document.getElementById('contenido');

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
                body += `<div id="25"></div>`;
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
    console.log(body);
    contenido.innerHTML = body;
}

//Init
(()=>{
    renderBoard();
})();

function getStyle(n){
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
    console.log({
        control
    });
    ultimo.innerHTML = simbolos[control];
    historial.innerHTML += simbolos[control];
    goTo(n);
}

document.addEventListener('keydown', e => {
    e = e || window.event;
    const handler = functions[e.key];
    if(handler){
        handler();
    }
});

function goTo(n){
    console.log(n);
}