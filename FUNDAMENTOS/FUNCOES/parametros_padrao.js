// estratégia 1 para gerar parametros padrão
function soma1 (a, b, c) {
    a = a || 0
    b = b || 0
    c = c || 0
    return a+b+c
}

console.log('estratégia 1: soma = ', soma1(1, ''))

// estratégia 2 para gerar parametros padrão
function soma2 (a, b, c) {
    a = a != undefined ? a : 0
    b = 1 in arguments ? b : 0
    c = isNaN(c) ? 0 : c
    return a+b+c
}

console.log('estratégia 2: soma = ', soma2())

// valor padão do es2015
function soma3 (a=0, b=0, c=0) {
    return a+b+c
}

console.log('estratégia 2: soma = ',soma3(1,2))