// Promisse
function falarDepoisDe (segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (frase == 'teste_reject'){
                reject('rejeitei')
            }
            resolve(frase)
        }, segundos * 1000)
    })
}

console.log("Espere 3 segundos...")
falarDepoisDe(3, "teste_reject")
    .then( retorno => console.log(retorno) )
    .catch( retorno => console.log(retorno) )
