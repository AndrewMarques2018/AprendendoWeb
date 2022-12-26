const valor = 'Global'

function minha_funcao () {
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minha_funcao()
}

exec()  // será imprimido "Global - pois a função irá buscar parametros onde ela foi criada"