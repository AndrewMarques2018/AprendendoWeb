class Lancamento {
    constructor(nome="Generico", valor=0){
        this.nome = nome
        this.valor = valor
    }
}

const lancamento = new Lancamento("Harry Potter", 3500)
console.log(lancamento)

class A extends Lancamento {
    constructor(){
        super()
    }
}

const a = new A()
console.log(a)