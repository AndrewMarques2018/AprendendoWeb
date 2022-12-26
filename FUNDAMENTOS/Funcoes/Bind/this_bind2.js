
// Nesse caso a função está sendo chamada por setInterval, que não contém a variável idade
function Pessoa () {
    this.idade = 32

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }, 1000)
}


// Solução 1 com o bind, referenciando o this
function Pessoa () {
    this.idade = 32

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

// Solução 2, utilizando uma constante self
function Pessoa () {
    this.idade = 32
    const self = this

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }.bind(this), 1000)
}

new Pessoa
