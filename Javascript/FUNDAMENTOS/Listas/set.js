// não aceita repetição e não é indexado
const numeros = new Set()
numeros.add(3)
numeros.add(7)
numeros.add(5)
numeros.add(5)
numeros.add(5)
numeros.add(8)
numeros.add(1)
numeros.add(2)

console.log(numeros)
console.log(numeros.size)
console.log(numeros.has(2))
console.log(numeros.delete(2))

const listNumeros = [1, 5, 4, 3, 2, 6, 3, 6, 7, 8, 9, 5, 4, 3, 2, 1, 3, 4, 5, 6, 4, 5, 3, 1, 2, 8]
const numerosSet = new Set(numeros)
console.log(numerosSet)