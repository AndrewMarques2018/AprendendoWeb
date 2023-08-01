const escola = 'cod3er'

console.log(escola.charAt(4))
console.log(escola.substring(2,5))
console.log("Escola ".concat(escola).concat(`!`))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/g, 'e'))  // (regex) transforma todos os numeros na letra 'e' 
console.log('Ana,maria,Jose'.split(','))

const templade = `Escola ${escola} !`
const templade2 = `1 + 1 = ${1 + 1}`

console.log(templade)
console.log(templade2)
