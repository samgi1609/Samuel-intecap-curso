// Programa para crear una matriz de 5x4 a partir de 20 números
let arreglo = [];
for (let fila = 0; fila < 5; fila++) {
    arreglo[fila] = [];
    for (let columna = 0; columna < 4; columna++) {
        let valor = parseInt(prompt(`Ingresa el número para la posición [${fila + 1}][${columna + 1}]:`));
        arreglo[fila][columna] = valor;
    }
}

// Mostrar la matriz 5x4
console.log("Matriz de 5 filas por 4 columnas:");
for (let fila = 0; fila < 5; fila++) {
    console.log(arreglo[fila].join(" "));
}

// Programa para crear un tablero de 8x8
console.log("¡Bienvenido al juego! Comenzarás en la casilla 1. ¡Buena suerte!");

let tableroAjedrez = [];
for (let fila = 0; fila < 8; fila++) {
    tableroAjedrez[fila] = [];
    for (let columna = 0; columna < 8; columna++) {
        tableroAjedrez[fila][columna] = (fila * 8) + (columna + 1);
    }
}

// Mostrar el tablero 8x8
console.log("Tablero de 8x8:");
for (let fila = 0; fila < 8; fila++) {
    console.log(tableroAjedrez[fila].join(" "));
}