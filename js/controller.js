const ultimo = document.getElementById('ultimo');
const historial = document.getElementById('historial');

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

function performButton(control){
    console.log({
        control
    });
    ultimo.innerHTML = simbolos[control];
    historial.innerHTML += simbolos[control];
}

document.addEventListener('keydown', e => {
    e = e || window.event;
    const handler = functions[e.key];
    if(handler){
        handler();
    }
});