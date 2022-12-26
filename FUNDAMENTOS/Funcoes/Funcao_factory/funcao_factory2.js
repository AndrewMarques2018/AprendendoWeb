function criarProduto (nome, preco) {
    const produto = {nome, preco, desconto: '10%'}
    return produto
}

const produto1 = criarProduto('celular', 2250.00)
console.log(produto1)