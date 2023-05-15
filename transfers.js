import { CuentaCorriente, Cliente, Plazo_Fijo, CompraDolar } from './classes.js';

const cliente1 = new Cliente("Pablo Lescano", "38.112.194");
const cliente2 = new Cliente("Laura Gomez", "23.456.321");
const cuentaDePablo = new CuentaCorriente(cliente1, "Santander", 0, "001");
const cuentaDeLaura = new CuentaCorriente(cliente2, "Brubank", 0, "002");
const compraDivisa = new CompraDolar(0, 0, 0);
//PLAZO FIJO
const pfCuentaCliente = new Cliente("Plazo Fijo", "#001");
const cuentaDePlazoFijo = new CuentaCorriente(pfCuentaCliente, "Banco Santander", 0, "#0001");
const plazoFijoClassCall = new Plazo_Fijo(0, 0, 0.85);
let saldoPablo = cuentaDePablo.verSaldo()
let saldoLaura = cuentaDeLaura.verSaldo()
let transfer = document.getElementById('transferir-btn');//USAR LOS ONCLICK ACA


//TRANSFERENCIAS
function transferCustomer() {
    let inputCustomer = document.getElementById('input-customer').value;
    let transferirCantidad = parseFloat(inputCustomer)

    if (transferirCantidad <= cuentaDePablo.verSaldo()) {
        cuentaDePablo.transferencia(transferirCantidad, cuentaDeLaura);

        let p5 = document.querySelector('#resume p:last-child')
        p5.textContent = "Monto: $" + transferirCantidad;
        let resumeContainer = document.getElementById('resume');
        resumeContainer.style.display = 'block';
    } else {
        alert("Fondos insuficientes.");
    }
    eliminarResumenTransferLaura()
    document.getElementById('input-pablo').value = '';
    document.getElementById('input-laura').value = '';
}
function transfLaura() {
    let inputLaura = document.getElementById('input-laura').value;
    let transferirCantidad = parseFloat(inputLaura);
    if (transferirCantidad <= cuentaDeLaura.verSaldo()) {
        cuentaDeLaura.transferencia(transferirCantidad, cuentaDePablo);
        let pLaura = document.querySelector('#resumeLaura p:last-child');
        pLaura.textContent = "Monto: $" + transferirCantidad;
        let resumeContainerLaura = document.getElementById('resumeLaura');
        resumeContainerLaura.style.display = 'block';

        // Plazo Fijo resume
        let pLauraPF = document.querySelector('#resumeLaura-pf p:last-child');
        pLauraPF.textContent = "Monto: $" + transferirCantidad;
        let resumeContainerLauraPF = document.getElementById('resumeLaura-pf');
        resumeContainerLauraPF.style.display = 'block';
    } else {
        alert("Fondos insuficientes.");
    }
    eliminarResumenTransferLaura()
    document.getElementById('input-pablo').value = '';
    document.getElementById('input-laura').value = '';
}

//VER SALDO
function ejecutarPablo() {
    let miSaldo = document.getElementById('saldo-pablo');
    saldoPablo = cuentaDePablo.verSaldo();
    miSaldo.textContent = "Saldo de Pablo: " + saldoPablo;
}
function ejecutarLaura() {
    let miSaldo = document.getElementById('saldo-laura');
    saldoLaura = cuentaDeLaura.verSaldo();
    miSaldo.textContent = "Saldo de Laura: " + saldoLaura;
}
cuentaDePablo.depositoEnCuenta(5000);
cuentaDeLaura.depositoEnCuenta(5000);

//RANDOMIZADOR DE NUMERO DE OPERACION

function randomize() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrOp = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    let password = '';
    for (let i = 0; i < 8; i++) {
        const combinedArr = arr.concat(arrOp);
        const randomIndex = Math.floor(Math.random() * combinedArr.length);
        const randomNum = combinedArr[randomIndex];
        password += randomNum;
    }
    return password;
}
const generatedPassword = randomize();

//RESUMEN DE TRANSFERENCIA

// LAURA resumen de transferencia
let divLaura = document.createElement('div');
divLaura.id = 'resumeLaura';
divLaura.className = 'resume-container';
let h2Laura = document.createElement('h2');
h2Laura.textContent = "Resumen de Transferencia";
divLaura.appendChild(h2Laura);
let pnumerotransaccionlaura = document.createElement('p');
pnumerotransaccionlaura.textContent = "Destinatario: " + cliente1.nombreCliente;
divLaura.appendChild(pnumerotransaccionlaura);
let pLaura = document.createElement('p');
pLaura.className = 'p-js-laura';
pLaura.textContent = "Origen: " + cliente2.nombreCliente;
divLaura.appendChild(pLaura);
let pdestino = document.createElement('p');
pdestino.textContent = "Número de operación: " + generatedPassword;
divLaura.appendChild(pdestino);
let p3Laura = document.createElement('p');
divLaura.appendChild(p3Laura);
p3Laura.textContent = "Banco " + cuentaDeLaura.banco;
let p4Laura = document.createElement('p');
divLaura.appendChild(p4Laura);
p4Laura.textContent = "Cuenta " + cuentaDeLaura.numeroCuenta;
let p5Laura = document.createElement('p');
divLaura.appendChild(p5Laura);
p5Laura.textContent = "DNI " + cliente2.dniCliente;
let p6Laura = document.createElement('p');
divLaura.appendChild(p6Laura);
document.body.appendChild(divLaura);


// PABLO resumen de transferencia
let div = document.createElement('div')
div.id = 'resume';
div.className = 'resume-container';
let h2 = document.createElement('h2')
h2.textContent = "Resumen de Transferencia"
div.appendChild(h2)
let pnumerotransaccion = document.createElement('p')
pnumerotransaccion.textContent = "Destinatario: " + cliente2.nombreCliente
div.appendChild(pnumerotransaccion)
let p = document.createElement('p')
p.className = 'p-js'
p.textContent = "Origen: " + cliente1.nombreCliente
div.appendChild(p)
let pdestiny = document.createElement('p')
pdestiny.textContent = "Número de operación: " + generatedPassword
div.appendChild(pdestiny)
let p3 = document.createElement('p')
div.appendChild(p3)
p3.textContent = "Banco " + cuentaDeLaura.banco
let p4 = document.createElement('p')
div.appendChild(p4)
p4.textContent = "Cuenta " + cuentaDeLaura.numeroCuenta
let p5 = document.createElement('p')
div.appendChild(p5)
p5.textContent = "DNI " + cliente2.dniCliente
let p6 = document.createElement('p')
div.appendChild(p6)
document.body.appendChild(div)

// Esconde el resumen de transferencia despues de 15 segundos
function eliminarResumenTransferLaura() {
    setTimeout(function () {
        let resumeLaura = document.getElementById('resumeLaura');
        let resumePablo = document.getElementById('resume');

        if (resumeLaura) {
            resumeLaura.remove();
        }

        if (resumePablo) {
            resumePablo.remove();
        }
    }, 15000);
}
// PLAZO FIJO

function PF_P() {
    let transferirCantidad = parseFloat(document.getElementById('input-pablo').value);
    if (transferirCantidad <= cuentaDePablo.verSaldo()) {
        cuentaDePablo.transferencia(transferirCantidad, cuentaDePlazoFijo);
        let montoAObtener = transferirCantidad + (transferirCantidad * plazoFijoClassCall.interes);
        const divPF = document.createElement("div");
        divPF.id = "resume-pf";
        divPF.className = "resume-pf";
        const h2PF = document.createElement("h2");
        h2PF.textContent = "Resumen de Cotización";
        divPF.appendChild(h2PF);
        // 0
        const pf = document.createElement("p");
        pf.textContent = "Cuenta " + pfCuentaCliente.nombreCliente;
        divPF.appendChild(pf);
        // 1
        const pf1 = document.createElement("p");
        divPF.appendChild(pf1);
        pf1.textContent = cuentaDePlazoFijo.banco;
        // 2
        const pf2 = document.createElement("p");
        divPF.appendChild(pf2);
        pf2.textContent = "Cuenta número " + cuentaDePlazoFijo.numeroCuenta;
        // 3
        const pf3 = document.createElement("p");
        divPF.appendChild(pf3);
        pf3.textContent = "Interés: " + plazoFijoClassCall.interes;
        // 4
        const pf3_5 = document.createElement("p");
        pf3_5.textContent = "Monto a obtener: $" + montoAObtener;
        cuentaDePablo.depositoEnCuenta(montoAObtener);
        divPF.appendChild(pf3_5);
        document.body.appendChild(divPF);
        divPF.style.display = 'block';
    } else {
        alert("Fondos insuficientes.");
    }

    document.getElementById('input-pablo').value = '';
    document.getElementById('input-laura').value = '';

    window.setTimeout(function () {
        let resumePablo = document.getElementById('resume-pf');
        if (resumePablo) {
            resumePablo.remove();
        }
    }, 15000);
}

function PF_L() {
    let transferirCantidad = parseFloat(document.getElementById('input-laura').value);
    if (transferirCantidad <= cuentaDeLaura.verSaldo()) {
        cuentaDeLaura.transferencia(transferirCantidad, cuentaDePlazoFijo);
        let montoAObtener = transferirCantidad + (transferirCantidad * plazoFijoClassCall.interes);
        const divPF = document.createElement("div");
        divPF.id = "resume-pf-l";
        divPF.className = "resume-pf-l";
        const h2PF = document.createElement("h2");
        h2PF.textContent = "Resumen de Cotización";
        divPF.appendChild(h2PF);
        // 0
        const pf = document.createElement("p");
        pf.textContent = "Cuenta " + pfCuentaCliente.nombreCliente;
        divPF.appendChild(pf);
        // 1
        const pf1 = document.createElement("p");
        divPF.appendChild(pf1);
        pf1.textContent = cuentaDePlazoFijo.banco;
        // 2
        const pf2 = document.createElement("p");
        divPF.appendChild(pf2);
        pf2.textContent = "Cuenta número " + cuentaDePlazoFijo.numeroCuenta;
        // 3
        const pf3 = document.createElement("p");
        divPF.appendChild(pf3);
        pf3.textContent = "Interés: " + plazoFijoClassCall.interes;
        // 4
        const pf3_5 = document.createElement("p");
        pf3_5.textContent = "Monto a obtener: $" + montoAObtener;
        cuentaDeLaura.depositoEnCuenta(montoAObtener);
        divPF.appendChild(pf3_5);
        document.body.appendChild(divPF);
        divPF.style.display = 'block';
    } else {
        alert("Fondos insuficientes.");
    }
    window.setTimeout(function () {
        let resumeLaura = document.getElementById('resume-pf-l');
        if (resumeLaura) {
            resumeLaura.remove();
        }
    }, 15000);

    document.getElementById('input-pablo').value = '';
    document.getElementById('input-laura').value = '';
}