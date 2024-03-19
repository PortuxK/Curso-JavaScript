

let codProd = parseInt(prompt('Bienvenidos a DeepGamerX. agrega tus productos al Carro \n1-Tarjeta grafica $550\n2-Procesador $350\n3-Fuente De Poder $180\n4-Memoria Ram $110\n5-Disipador $100\n6-Gabinete $80\n0-Finalizar Compra'));
let total = 0;
const IVA = 0.19;
const DESC_EF = 0.15;
const RECARGO_CREDITO = 0.05



while (codProd != 0) {
    switch (codProd) {
        case 1:
            total += 550;
            alert('Tarjeta grafica agregada al carro Total a Pagar $' + total);
            break;
        case 2:
            total += 350;
            alert('Procesador agregado al carro Total a Pagar $' + total);
            break;
        case 3:
            total += 180;
            alert('Fuente De Poder agregada al carro Total a Pagar $' + total);
            break;
        case 4:
            total += 110;
            alert('Memoria Ram agregada al carro Total a Pagar $' + total);
            break;
        case 5:
            total += 100;
            alert('Disipador agregado al carro Total a Pagar $' + total);
            break;
        case 6:
            total += 80;
            alert('Gbinete agregado al carro Total a Pagar $' + total);
            break;
        default:
            alert('Vuelva a intentar');
            break;
    }
    codProd = parseInt(prompt('ingresa tus productos al carro\n1-tarjeta grafica $550\n2-procesador $350\n3-Fuente De Poder $180\n4-Memoria Ram $110\n5-Disipador $100\n6-Gabinete $80\n0-Finalizar Compra'));
}

let modoPago = parseInt(prompt('Elija su metodo de pago !\n1-Efectivo (-15%)\n2-Debito\n3-Credito (Recargo 5%) '));


if (modoPago == 1) {
    alert('total a pagar $' + aplicarImpuestosyDescuentos(IVA, DESC_EF));
} else if (modoPago == 2) {
    alert('total a pagar $' + aplicarImpuestosyDescuentos(IVA, 0));
} else if (modoPago == 3) {
    alert('total a pagar $' + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO, 0));
} else {
    alert('Opcion invalida!');

}
function aplicarImpuestosyDescuentos(impuestos, descuentos) {
    let totalConImpuestos = total * (1 + impuestos);
    let ttotalConImpuestosYDescuentos;
    if (descuentos != 0) {
        totalConImpuestosYDescuentos = totalConImpuestos * (1 - descuentos)
    } else {
        totalConImpuestosYDescuentos = totalConImpuestos;
    }
    return totalConImpuestosYDescuentos;
}





