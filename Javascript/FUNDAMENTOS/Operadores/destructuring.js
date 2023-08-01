// Em um objeto
const pessoa = {
    nome: "Ana",
    idade: 22,
    endereco: {
        logadouro: 'rua XYZ',
        numero: 828
    }
}

const { nome: n, idade: i, endereco : { logadouro : l }} = pessoa

console.log(n, i)
console.log(l)

// Em um array

const [a, b, c, , , , d] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(a, b, c, d)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

// Em um função

function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
//console.log(rand(obj))

// Em um função

function rand2 ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj2 = [0, 40]
console.log(rand2(obj2))