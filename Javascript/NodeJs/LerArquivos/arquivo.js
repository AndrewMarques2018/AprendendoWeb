const fs = require("fs")
const caminho = __dirname + '/arquivo.json'


// ler arquivo
// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.bd.host}:${config.bd.port}`)
})

const config = require('./arquivo.json')
const { json } = require("stream/consumers")
console.log(config)


// ler diretorio
fs.readdir(__dirname, (error, conteudo) => {
    const arquivos = conteudo
    console.log(arquivos)
})


// escrever arquivo
const produto = {
    nome: "celular",
    valor: 1200
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log( err || 'Arquivo salvo!')
})

