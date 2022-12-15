for (var i = 0; i<10; i++) {
    console.log(i)
}

console.log('i=',i)

for (let j = 0; j<10; j++) {
    console.log(j)
}

console.log('i=', i)

// console.log('j=', j) not defined

const funcs = []

for (var k = 0; k<10; k++){
    funcs.push(function() {
        console.log(k)
    })
}

funcs[3]()