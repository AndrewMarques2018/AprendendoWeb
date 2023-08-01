const shedule = require('node-schedule')

console.log("Criando Tarefa 1:", new Date())
const tarefa1 = shedule.scheduleJob('*/5 * 11 * * 5', () => {
    console.log("executando tarefa 1!", new Date())
})


console.log("Criando Tarefa 2:", new Date())
const regra = new shedule.RecurrenceRule()
regra.dayOfWeek = [new shedule.Range(1, 5)]
regra.hour = 11
regra.second = 15

const tarefa2 = shedule.scheduleJob( regra, function() {
    console.log("executando tarefa 2!", new Date())
})

setTimeout( function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!', new Date())
}, 20000)