// Função Factory é uma função que retorna um objeto

// Factory Simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobreNome: 'Silva'
    }
}

const pessoa1 = criarPessoa()

console.log(pessoa1)