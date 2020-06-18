// Exercício de funções "média da turma"

const alunosTurmaA = [
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
        nome: 'Thais',
        idade: 30,
        nota: 10
    }
]
 
const alunosTurmaB = [
    {
        nome: 'Caio',
        idade: 20,
        nota: 4.2
    },
    {
        nome: 'Thales',
        idade: 32,
        nota: 5.9
    },
    {
        nome: 'Alan',
        idade: 27,
        nota:  3
    }
]

function calculaMedia(alunos){
     return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)


function enviaResultado (media, turma){
    if(media >= 6){
        console.log(`A média da ${turma} foi ${media}, parabéns vocês passaram!`)
    }else {
        console.log(`A media da ${turma} foi ${media}, Não foi dessa vez, tendem novamemnte.`)
    }
}

enviaResultado(media1, 'turma A')
enviaResultado(media2, 'turma B')