const produtos = [
    {nome: "Produto 1", preco: 5000.00},
    {nome: "Produto 2", preco: 2500.00},
    {nome: "Produto 3", preco: 1000.00},
    {nome: "Produto 4", preco: 500.00},
    {nome: "Produto 5", preco: 100.00},
]

let result = produtos.filter( p => p.preco <= 1000)
console.log(result)