const salarios = [1200.00, 2230.57, 5000.00, 1899.89, 2000.00]

let result = salarios.reduce( (total, s) => total + s )

console.log(result)