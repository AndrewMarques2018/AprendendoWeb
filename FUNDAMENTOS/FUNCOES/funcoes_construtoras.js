// Paradigma OO
function Carro ( velocidadeMax = 200, delta = 5 ) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMax
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

}

const fiat_uno = new Carro
fiat_uno.acelerar()
console.log(fiat_uno.getVelocidadeAtual())

const ferrari = new Carro(300, 35)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())