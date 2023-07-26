

// declaração de objetos
let objeto1 = {}
let objeto2 = new Object

// criar um objeto apartir de um Json
const objetoJson = JSON.parse('{"A": 1, "B": 2, "C": 3}')
console.log(objetoJson)


// Objetos constamtes
const objeto3 = {nome: "Ana"}
Object.freeze(objeto3)
objeto3.nome = "Qualquer coisa"
delete objeto3.nome

console.log(objeto3.nome)
console.log(objeto3["nome"], '\n')



// notação literal
const a = 1
const b = 2
const c = 3

let o1 = {a: a, b: b, c: c}
let o2 = {a, b, c}

console.log(o1)
console.log(o2)
