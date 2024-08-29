// Saldo inicial de las cuentas bancarias
let saldoCuenta1 = 500.00;
let saldoCuenta2 = 300.00;

function mostrarSaldos() {
    console.log(`Saldo de la Cuenta No 1: ${saldoCuenta1.toFixed(2)}`);
    console.log(`Saldo de la Cuenta No 2: ${saldoCuenta2.toFixed(2)}`);
}

function abonarCuenta(cuenta, cantidad) {
    if (cuenta === 1) {
        saldoCuenta1 += cantidad;
        console.log(`Se han abonado ${cantidad.toFixed(2)} a la Cuenta No 1`);
    } else if (cuenta === 2) {
        saldoCuenta2 += cantidad;
        console.log(`Se han abonado ${cantidad.toFixed(2)} a la Cuenta No 2`);
    } else {
        console.log("Número de cuenta inválido.");
    }
}

function debitarCuenta(cuenta, cantidad) {
    if (cuenta === 1) {
        if (cantidad <= saldoCuenta1) {
            saldoCuenta1 -= cantidad;
            console.log(`Se han debitado ${cantidad.toFixed(2)} de la Cuenta No 1`);
        } else {
            console.log("Fondos insuficientes en la Cuenta No 1.");
        }
    } else if (cuenta === 2) {
        if (cantidad <= saldoCuenta2) {
            saldoCuenta2 -= cantidad;
            console.log(`Se han debitado ${cantidad.toFixed(2)} de la Cuenta No 2`);
        } else {
            console.log("Fondos insuficientes en la Cuenta No 2.");
        }
    } else {
        console.log("Número de cuenta inválido.");
    }
}

// Ejemplo de uso del programa
mostrarSaldos();

let abono = parseFloat(prompt("Ingrese un valor para abonar a la cuenta No. 1:"));
abonarCuenta(1, abono);

let debito = parseFloat(prompt("Ingrese un valor para debitar de la cuenta No. 2:"));
debitarCuenta(2, debito);

mostrarSaldos();
