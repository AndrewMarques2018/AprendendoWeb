const objeto = {nome: "Andrew", idade: 107}

console.log(Object.keys(objeto))
console.log(Object.values(objeto))
console.log(Object.entries(objeto))

Object.entries(objeto).forEach( ([cahave, valor]) => {
    console.log(`${cahave} - ${valor}`)
})

Object.defineProperty(objeto, 'cargo', {
    enumerable: true,
    writable: false,
    value: "Desenvolvedor de software"
})

objeto.cargo = "Outro valor"
console.log(objeto.cargo)

const o1 = {teste1: "Qualquer coisa"}
const o2 = {teste2: "Qualquer coisa"}
const o3 = {teste3: "Qualquer coisa"}

Object.assign(objeto, o1, o2, o3)
console.log(objeto)


// preventExtensions - evitando modificações (não é permitido adicionar chaves e valores)
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 12000.00, tag: "Promoção"
})
console.log( Object.isExtensible(produto) )

console.log( produto )
produto.nome = "Notebook Asus"
produto.preco = 8340.99
delete produto.tag
produto.id = 1001

console.log( produto )


// seal - evitando modificações (não é permitido adicionar, remover chaves e valores)
const produto2 = {
    nome: "Qualquer", preco: 12000.00, tag: "Promoção"
}
Object.seal(produto2)
console.log( Object.isExtensible(produto2) )

console.log( produto2 )
produto2.nome = "Notebook Asus"
produto2.preco = 8340.99
delete produto2.tag
produto2.id = 1001

console.log( produto2 )


// freeze - evitando modificações (não é permitido adicionar, remover, atualizar chaves e valores)
const produto3 = {
    nome: "Qualquer", preco: 12000.00, tag: "Promoção"
}
Object.freeze(produto3)
console.log( Object.isExtensible(produto3) )

console.log( produto3 )
produto3.nome = "Notebook Asus"
produto3.preco = 8340.99
delete produto3.tag
produto3.id = 1001

console.log( produto3 )