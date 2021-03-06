/**
 * [0] -> Arriba
 * [1] -> Derecha
 * [2] -> Abajo
 * [3] -> Izquierda
 */

const transiciones = [
    [23, 0, 0, 0],
    [1, 2, 6, 1],
    [2, 3, 2, 1],
    [26, 4, 3, 2],
    [4, 5, 4, 3],
    [5, 5, 5, 4],
    [1, 6, 11, 6],
    [7, 7, 12, 7],
    [8, 9, 13, 8],
    [9, 10, 9, 8],
    [10, 10, 15, 9],
    [6, 12, 11, 11],
    [7, 13, 17, 11],
    [8, 14, 13, 12],
    [14, 14, 14, 13],
    [10, 15, 20, 15],
    [16, 17, 21, 16],
    [12, 17, 17, 16],
    [18, 19, 23, 18],
    [19, 19, 24, 18],
    [15, 20, 25, 20],
    [16, 22, 21, 21],
    [22, 22, 22, 21],
    [18, 23, 0, 23],
    [19, 25, 24, 24],
    [20, 25, 25, 24],
    [26, 26, 26, 26]
];

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