const notas = [1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]

// sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback
notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)
