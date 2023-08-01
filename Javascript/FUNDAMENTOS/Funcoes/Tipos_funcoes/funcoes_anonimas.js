// Variável soma recebe uma função anonima que retorna a soma de dois numeros
const soma = function (x,y) {
    return x+y
}

const imprimir_resultado = function (a,b, operacao = soma) { 
    console.log( operacao(a,b ))
}

imprimir_resultado(3, 4, (a,b) => {return a-b})  // enviada por parametro uma função anonima