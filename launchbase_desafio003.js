/*===============================================================================================
Crie um programa com um objeto para armazenar dados de um programador como
nome, idade e tecnologias que trabalha.
Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
=================================================================================================*/


const tecnologias = [
    {
        tecnologia: 'C++',
        especialidade: 'Desktop'
    },
    {
        tecnologia: 'Python',
        especialidade: 'Data Science'
    },
    {
        tecnologia: 'JavaScript',
        especialidade: 'Web/Mobile'
    }
    

]

const programadores = [
    {
        nome: 'Thais',
        idade: 27,
    },
    {
        nome: 'Lucas',
        idade: 31
    }
]

console.log(`A programadora ${programadores[0].nome} tem ${programadores[0].idade} anos e utiliza a tecnologia ${tecnologias[1].tecnologia} com especialidade em ${tecnologias[1].especialidade}.`)


/* ======EXEMPLO DE SOLUÇÃO DA ROCKETSEAT======

// Vetores e objetos

const programador = {
    nome: "Mayk",
    idade: 35,
    tecnologias:  [
        { nome: 'JavaScript', especialidade: 'Desktop' }, 
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)*/