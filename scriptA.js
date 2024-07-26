//Exercise 1
alert ("Ejercicio 1")
let number_one = prompt("Ingresa primer numero aqui");
let number_two = prompt("Ingresa segundo numero aqui");
//number_one = parseFloat(number_one) // esto seria en dado caso quisiera mostrarlos como numeros, pero quiero dejarlos como strings.
//number_two = parseFloat(number_two)
alert ("Estos son los dos numeros que ingresaste: " + number_one + " y " + number_two);

//Exercise 2
alert ("Ejercicio 2")
let name_exercise = prompt("Cual es tu nombre?","Pon tu nombre en este espacio");
alert ("Este resultado se encuentra en la consola")
console.log ("Buenas noches " + name_exercise); // esto no aparecera en pantalla, pero si en la consola pero pedira el nombre en cuadro de texto.

//Exercise 3
alert ("Ejercicio 3")
let no_one = prompt("1er Valor","escribe el valor");
let no_two = prompt("2ndo Valor","escribe el valor");
no_one = parseFloat(no_one);
no_two = parseFloat(no_two);
console.log (no_one + no_two);
console.log(no_one - no_two);
console.log(no_one * no_two);
console.log(no_one / no_two); // esto solo aparecera en la consola, sin embargo pedira los numeros por un cuadro de texto.
alert("Estos resultados de suma, resta, multiplicacion y division se encontraran en la consola")

//Exercise 4
alert ("Ejercicio 4")
let resultadoCelsius = prompt("Grados Celsius: ","escribe el valor");
let converstionCelsiusFarenheit = (resultadoCelsius * 9/5 +32);
alert ("El valor anteriormente ingresado en Celsius a Farenheit " +"(" + resultadoCelsius +" °C) = "  + converstionCelsiusFarenheit + "ºF"); 
//Ese no especifica como hay que mostrar el resultado asi que lo muestro en una alerta.
