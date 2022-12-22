function imprime (t) {
    console.log(t)
}

function soma(a, b=3) {
    return a + b;
}

imprime(soma(2, 7))
imprime(soma(2))

let funcao = soma
imprime(funcao(5, 7))

const imprimirSoma1 = function (a, b=0) {
    console.log(a + b)
}

const imprimirSoma2 = (a, b=0) => {
    console.log(a + b)
}

const imprimirSoma3 = (a, b=0) => console.log(a + b)

imprimirSoma1(7,7)
imprimirSoma1(7,7)
imprimirSoma3(7,7)

