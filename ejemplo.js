//NUMBER
let cellphoneNumber = "123123372687"
let parseo = Number(cellphoneNumber);
console.log(parseo);
console.log(parseo * 3);
console.log(typeof parseo);
bulean = true;
console.log(typeof bulean);


//PASEINT
let cellphoneNumber1 = "1231233q7268sdf7"
let parseo2 = parseInt(cellphoneNumber1);
console.log(parseo2);
console.log(cellphoneNumber1.replace(/\D/g,''));


//JSON
let cantidadNumeros = '{"nombre": "Samuel Giron", "Edad": 99, "Ciudad" : "Guatemala"}'
console.log(JSON.parse(cantidadNumeros))

//Eval
let nommbre = "Samuel";
//console.log(eval(new String "nommbre"));

//TOFIXED
let pi = 3.14168723464874165276357621537
console.log(pi.toFixed(4))

//PRACTICA

//Realiza un programa que pida dos numeros y que nos diga si son iguales o no
let firstNumber = prompt("Escriba primer numero","Digite 1er numero")
let secondNumber = prompt("Escriba segundo numero","Digite 2ndo numero")
if (firstNumber === secondNumber) {
    alert("Es el mismo dia");
} else if (firstNumber != secondNumber)
    alert("No es el mismo dia")

//Pedir un numero e indicar si es positivo o negativo
let firstNumberExercise1 = prompt("Escriba primer numero","Digite 1er numero")
if (firstNumberExercise1 > 0) {
    alert("The number is positive")
    } else if (firstNumberExercise1 < 0) {
    alert("The number is negative")
        } else if (firstNumberExercise1 == 0) {
        alert("The number is Zero")
}

//Pedir dos numeros y mostrarlos ordenados de mayor a menor

 
//Pedir tres numeros y mostrarlos ordenados de mayor a menor

const numero1 = parseInt(prompt('Digite un numero inicial'));
const numero2 = parseInt(prompt('Digite un segundo numero'));
const numero3 = parseInt(prompt('Digite un tercer numero'));
 
if (numero1 > numero2) {
    if (numero1 > numero3) {
        if (numero2 > numero3) {
            console.log(numero1, numero2, numero3);
        } else {
            console.log(numero1, numero3, numero2);
        }
    } else {
        console.log(numero3, numero1, numero2);
    }
} else {
    if (numero2 > numero3) {
        if (numero1 > numero3) {
            console.log(numero2, numero1, numero3);
        } else {
            console.log(numero2, numero3, numero1);
        }
    } else {
        console.log(numero3, numero2, numero1);
    }
}

//





