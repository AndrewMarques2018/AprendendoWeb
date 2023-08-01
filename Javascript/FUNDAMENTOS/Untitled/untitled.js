let a = 3

global.b = 123
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)  // this é igual a module.exports!

variavel = 'teste de variaveis'  // Não criar variáveis assim, pois vai direto para o escopo global!
console.log(global.abc)