const nombresDeMeses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Función para devolver el nombre del mes
function devolverNombreMes(indice) {
    if (indice >= 1 && indice <= 12) {
        return nombresDeMeses[indice - 1]; 
    } else {
        return "El número ingresado está fuera del rango válido (1-12).";
    }
}

// Pedir al usuario que ingrese un número
const numeroDelUsuario = parseInt(prompt("Por favor, ingrese un número entre 1 y 12:"));

// Imprimir el nombre del mes correspondiente en la consola
console.log(devolverNombreMes(numeroDelUsuario));


 
