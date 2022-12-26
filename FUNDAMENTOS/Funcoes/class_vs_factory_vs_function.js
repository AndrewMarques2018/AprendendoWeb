// Classe
class Pessoa {

    constructor (nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

// Function Factory
const criar_pessoa1 = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

// Function
function criar_pessoa2 ( nome ) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}


const pessoa1 = new Pessoa( 'Andrew' )
pessoa1.falar()

const pessoa2 = criar_pessoa1( 'Fabiana' )
pessoa2.falar()

const pessoa3 = new criar_pessoa2( 'Wesley' )
pessoa3.falar()
