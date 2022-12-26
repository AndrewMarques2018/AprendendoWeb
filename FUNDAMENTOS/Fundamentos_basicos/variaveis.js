var a = 1
{
    var a = 2
    console.log('dentro', a)
}
console.log('fora', a)

console.log("........................................")

let b = 1
{
    let b = 2
    console.log('dentro', b)
}
console.log('fora', b)


console.log("........................................")

var c = 1
{
    let c = 2
    console.log('dentro', c)
}
console.log('fora', c)
