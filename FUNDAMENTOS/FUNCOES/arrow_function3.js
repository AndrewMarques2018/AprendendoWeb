let compara_com_this = function (param) {
    console.log( this === param )
}

compara_com_this(global)  // true

const obj = {}
compara_com_this = compara_com_this.bind(obj)
compara_com_this(global)  // false
compara_com_this(obj)  // true

let compara_com_this_arrow = param => console.log(this === param)
compara_com_this_arrow(global)  // false
compara_com_this_arrow(module.exports)  // true

compara_com_this_arrow = compara_com_this_arrow.bind(obj)  // Em uma arrow function o this é imutável
compara_com_this_arrow(obj)  // false