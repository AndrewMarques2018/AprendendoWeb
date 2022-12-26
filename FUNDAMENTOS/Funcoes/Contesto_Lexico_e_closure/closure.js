// Closures é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular as variáveis externas à função

// Contexto Léxico em ação!

const x = "Global"

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minha_funcao = fora()
console.log(minha_funcao())