const numeros = [1, 2, 3, 4, 5]

let resultado = numeros.map( n => n * 2)
console.log(resultado)

const parseToMoney = n => `R$ ${parseFloat(n).toFixed(2).replace('.', ',')}`
resultado = numeros.map(parseToMoney)
console.log(resultado)