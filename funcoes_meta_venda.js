// Exercicio de funções "meta de venda"

const equipeVendaOnline = [ //<==== isso é um array de objetos.
    {
        nome: 'Marcus',
        idade: 20,
        vendas: 900
    },
    {
        nome: 'Júlia',
        idade: 22,
        vendas: 920
    },
    {
        nome: 'Marina',
        idade: 30,
        vendas: 500
    },
    {
        nome: 'Neiva',
        idade: 57,
        vendas: 800
    }
]

const equipeVendasRua = [
    {
        nome: 'Jacobs',
        idade: 30,
        vendas: 1500
    },
    {
        nome: 'Mario',
        idade: 23,
        vendas: 300
    },
    {
        nome: 'Raquel',
        idade: 20,
        vendas: 490
    },
    {
        nome: 'Bianca',
        idade: 28,
        vendas: 350
    }
]

function calculoVendas (vendaeqp){// <==== Isso é uma função, é como se fosse uma 'fórmula'.
    return (vendaeqp[0].vendas + vendaeqp[1].vendas + vendaeqp[2].vendas + vendaeqp[3].vendas) //<== dentro dessa função está sendo somado o valor de '.vendas' que é uma propriedade contida nos arrays que criei.
}

const vendas1 = calculoVendas(equipeVendaOnline)//<=== A variável 'vendas1' está recebendo os dados da calculoVendas, que aplicou o array equipeVendaOnline na função.
const vendas2 = calculoVendas(equipeVendasRua)// Como são duas equipes, fiz duas variáveis, cada uma utilizando a mesma função para fazer o calculo de '.vendas'.

function nomeEquipe (names){//<=== Outra função, agora para guardar os nomes que estão contidos nos arrays.
    return (`${names[0].nome}, ${names[1].nome}, ${names[2].nome} e ${names[3].nome}`)// O '[]' indica a posição dentro do array, e o '.nome' indica que eu quero a informação 'nome', que está dentro dos arrays.  
}

const nomeEquipe1 = nomeEquipe(equipeVendaOnline)// Novamente, duas variáveis, cada uma guardando as informaçãoes do '.nome.' das duas arrays.
const nomeEquipe2 = nomeEquipe(equipeVendasRua)

function mostreMetas (meta, equipe,nom){//<=== Agora esta função está fazendo uma "fórmula" com a condição(if). Ah as funções também servem para reaproveitarmos um código :)
    if (meta >= 3000){
        console.log(`Parabéns equipe de vendas ${equipe}, vocês bateram a meta do dia, agradecemos: ${nom} pela dedicação!`)
    }else {
        console.log(`Equipe de vendas ${equipe}, não bateram a meta hoje, bora continuar tentando.`)
    }
}

mostreMetas(vendas1, 'Online',nomeEquipe1)//<== Aqui estamos colocando as funções para "rodar"
mostreMetas(vendas2, 'Rua',nomeEquipe2)// Observei ser importante seguir a sequencia certa, dentro da nossa função acima ^ a sequencia vai substituir as '${}' da nossa função.


