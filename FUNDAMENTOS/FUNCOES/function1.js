// Função em JS é First-class Object (Citizens)
// Higher-order Function

// criar de forma literal
func1 = function () { }


// armazenar em uma variável
func2 = function () {}


// armazenar em um array
const array = [function (a, b) { return a+b}, func1, func2]


// armazenar em um atributo de um objeto
const objeto = {}
objeto.falar = function () { console.log('Opa')}


// passar função como parametro
const dizer_oi = function () { console.log('oi')}

function executar_function (func){
    func()
}

executar_function (dizer_oi)

// Uma função pode retornar/conter uma função
function somaMultipla(a){
    return function soma (b) {
        return function soma (c) {
            console.log('soma =', a+b+c)
        }
    }
}

somaMultipla(5)(10)(15)