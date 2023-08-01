const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

for (let letra of alfabeto) {
    console.log (letra)
}

for (let letra of 'alfabeto') {
    console.log (letra)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: true}]
])

for (let assunto of assuntosMap) {
    console.log (assunto)
}

for (let values of assuntosMap.values()) {
    console.log (values)
}

for (let keys of assuntosMap.keys()) {
    console.log (keys)
}

for (let [key, value] of assuntosMap) {
    console.log (key, value)
}