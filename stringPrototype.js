String.prototype.concatenarPalabra = function(palabra){
    return `${this} ${palabra}`;
}

const nombre = "Rodrigo";
console.log(nombre.concatenarPalabra("Amarilla"));