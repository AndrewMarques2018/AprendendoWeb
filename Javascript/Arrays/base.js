
// Criação
console.log("Criando Arrays")
let array1 = new Array(1, 2, 3, 4, 5)
let array2 = [1, 2, 3, 4, 5]

console.log(array1)
console.log(array2, '\n\n')


// Métodos - sort
console.log("sort")
let sortArray = [7, 5, 8, 9, 3, 0, 1, 2, 4, 6]
sortArray.sort()
console.log(sortArray, "\n\n")


// Métodos - splice
console.log("splice")
let spliceArray = [1, 2, 3, 4, 5]
spliceArray.splice(1, 3, "add1", "add2")  // deleta 4 itens apartir do elemento 5, adiciona 2 itens
console.log(spliceArray, '\n\n')


let array;
// Métodos - pop e push
console.log("pop e push")
array = [1, 2, 3, 4]
array.push(5)  // adiciona um elemento no final do array
console.log(array)

let pop = array.pop()  // retira o ultimo elemento
console.log(pop)
console.log(array, '\n\n')


// Métodos - shift e unshift
console.log("shift e unshift")
array = [1, 2, 3, 4]
array.unshift(0)  // adiciona um elemento no inicio do array
console.log(array)

let shift = array.shift()  // retira o primeiro elemento
console.log(shift)
console.log(array, '\n\n')


// Métodos - slice
console.log("slice")
array = [1, 2, 3, 4, 5]
let splice = array.slice(2, 4)
console.log(splice)