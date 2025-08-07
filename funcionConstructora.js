function CuentaBancaria(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
}

CuentaBancaria.prototype.depositar = function (cantidad){
    if (cantidad > 0) {
        this.saldo += cantidad;
console.log(`Se depositaron $${cantidad}.`);
    } else {
        console.log("La cantidad a depositar debe ser mayor que cero");
    }
}

CuentaBancaria.prototype.extraer = function (cantidad){
    if(cantidad > this.saldo){
        console.log("Fondos insuficientes");
    }else{
        this.saldo -= cantidad;
        console.log(`Se retiraron $${cantidad}.`);
    }
}

CuentaBancaria.prototype.consultarSaldo = function (){
    console.log(`Saldo actual: $${this.saldo}`)
}
const rodrigo= new CuentaBancaria("Rodrigo", 1000);

rodrigo.depositar(500);

rodrigo.extraer(200);

rodrigo.consultarSaldo();



