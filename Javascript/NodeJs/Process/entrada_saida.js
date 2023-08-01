const entrada_de_dados_terminal = process.argv.indexOf('-a') !== 1
console.log(entrada_de_dados_terminal)

process.stdout.write('Digite seu nome: ')
process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')
    process.stdout.write(`Bem vindo, ${nome}\n`)
    process.exit()
})
