function esperarPor (tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, tempo)
    })
}

function retornarValor() {
    return new Promise((resolve, reject) => {
        setTimeout( () => resolve(10), 3000) 
    })
}

/* console.log("inicializando Promise")
esperarPor(3000)
    .then(() => console.log('Executando...'))
    .then(esperarPor)
    .then(() => console.log('Executando...'))
    .then(esperarPor)
    .then(() => console.log('Executando...')) */

async function executar(){
    let valor = await retornarValor()

    await esperarPor()
    console.log(`Async/Await ${valor++}...`)
    await esperarPor()
    console.log(`Async/Await ${valor++}...`)
    await esperarPor()
    console.log(`Async/Await ${valor++}...`)
}

executar()