const pessoa = {
    nome: 'Ana Maria',
    saudacao: 'Olá',
    falar() {
        console.log(this.saudacao)
    }
}

// this aponta para pessoa, pois a pessoa é dona da função falar
pessoa.falar()  

const falar = pessoa.falar

// conflito entre paradigmas funcional e OO
// this não aponta para pessoa, pois a função foi colocada em outro ambiente
falar()  

// solução para o paradigma, bind permite apontar quem será o this de um objeto
const falarPessoa = pessoa.falar.bind(pessoa)