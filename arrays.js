// ARRAYS ou VETORES
// É uma variável que contém(guarda) vários valores ou objetos dentro. 

//Exemplo array com objetos
const alunos = [
    {
        nome: 'Mel',
        idade: 18,
        nota: 9.9
    },
    {
        nome: 'May',
        idade: 25,
        nota: 9.9
    },
    {
        nome: 'Alan',
        idade: 30,
        nota: 7
    }
]

//Exemplo array com diversos valores
const materiais = ['lapis', 'borracha', 'caneta', 'caderno']
//Aplicando array numa operação prática
const media = (alunos.nota) / 3

if(media >= 25){
    console.log('Parabéns! foram aprovados')
}else {
    console.log('Não foi dessa vez, tendem novamemnte')
}