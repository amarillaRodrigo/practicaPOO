class CuentaBancaria{
    constructor(titular, saldoInicial){
        this.titular = titular;
        this._saldo = saldoInicial > 0 ? saldoInicial : 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        if (valor >= 0){
            this._saldo = valor;
        } else {
            console.log("El saldo no puede ser negativo");
        }
    }

    depositar(monto){
        if (monto > 0){
            this._saldo += monto;
            console.log(`Se depositaron $${monto}.`);
        } else {
            console.log("La cantidad a depositar debe ser mayor que cero");
        }
    }

    extraer(monto){
        if (monto > this._saldo){
            console.log("Fondos insuficientes");
        } else {
            this._saldo -= monto;
            console.log(`Se retiraron $${monto}.`);
        }
    }

    consultarSaldo(){
        console.log(`Saldo actual: $${this._saldo}`);
    }
}

const rodrigo = new CuentaBancaria("Rodrigo", 1000);
rodrigo.depositar(500);
rodrigo.extraer(200);
rodrigo.consultarSaldo();
rodrigo.saldo = -100;
