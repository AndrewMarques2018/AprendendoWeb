function somatoria () {
    let soma = 0
    for (x in arguments){
        soma += arguments[x]
    }
    return soma
}

console.log(somatoria())
console.log(somatoria(1,2,3,4,5))
console.log(somatoria(1,2,3,4,5,6,7,8,9,10))