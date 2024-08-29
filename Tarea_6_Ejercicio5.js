//Programa que pide números hasta que se teclee un 0, mostrando la suma de todos los números introducidos:

let numero;
let suma = 0;
do {
    numero = parseFloat(prompt("Introduce un número:"));
    suma += numero;
} while (numero !== 0);
console.log(`La suma de todos los números introducidos es ${suma}`);