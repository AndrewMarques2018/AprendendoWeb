const tecnologias = new Map()
tecnologias.set('react', { framwork: false })
tecnologias.set('angular', { framwork: true })

console.log('tecnologias.get("react").framwork ->', tecnologias.get('react').framwork)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [12, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
});

console.log("tecnologias.has('angular') ->", tecnologias.has('angular'))
chavesVariadas.delete(12)
console.log("tecnologias.size() ->", tecnologias.size)