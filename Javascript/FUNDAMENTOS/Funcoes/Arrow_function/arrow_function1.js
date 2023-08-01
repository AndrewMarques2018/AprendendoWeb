// exemplo 1
let dobro = function (a) {
    return a*2
}

// exemplo 2
dobro = (a) => {return a*2}

// exemplo 3 - apenas um parametro, retorno implicito
dobro = a => a*2

console.log(dobro(4))

// exemplo 4 e 5 - sem parametros
dizer_ola = () => 'Olá'
dizer_ola = _ => 'Olá' // possui parametros porem pode ignora-lo

console.log(dizer_ola())
