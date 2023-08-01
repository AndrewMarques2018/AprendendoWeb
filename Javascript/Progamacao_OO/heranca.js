
// __proto__ (parente)
// Object.setPrototypeOf (setar parente)

const avo = { atributo1: "A" }
const pai = { __proto__: avo, atributo2: "B" }
const filho = { atributo3: "C" }

Object.setPrototypeOf(filho, pai)

console.log( filho.atributo1 )
console.log( Object.getPrototypeOf(filho) === pai)

const neto = Object.create(filho, {atributo4: {value: "D", enumerable: true, writable: false}})
console.log(neto.atributo1, neto)

console.log( neto.hasOwnProperty('atributo2') )  // atributo 2 veio por herança
console.log( neto.hasOwnProperty('atributo4') )  // atributo 4 não veio por herança



function MeuObjeto() {

}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log( obj1.__proto__ === obj2.__proto__ ) // Objetos criados de uma mesma classe tem o mesmo pai 