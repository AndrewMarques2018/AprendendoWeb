// this em uma função arrow é fixo

function Pessoa () {
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa