const array = ['a', 'b', 'c', 'd']

for (let i=0; i<array.length; i++){
    console.log(`indice ${i}: ${array[i]}`)
}

console.log('\n\n')

for (let item in array){
    console.log(`indice ${item}: ${array[item]}`)
}

console.log('\n\n')

array.forEach((element, indice, arry) => {
    console.log(`indice ${indice}: ${element}`)
});

console.log('\n\n')

array.forEach(function(item, indice, array) {
    console.log(`indice ${indice}: ${item}`)
})

console.log('\n\n')

array.forEach((item, indice, array) => console.log(`indice ${indice}: ${item}`)
)