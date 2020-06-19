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
    

    function calculaMeta(vendedores) {
        let calcvendas = 0
        for (let p = 0; p < vendedores.length; p++){
            calcvendas = calcvendas + vendedores[p].vendas
        }
    
        
        const total = calcvendas
        return total

    }
       
const meta1 =  calculaMeta(equipeVendaOnline)
const meta2 =  calculaMeta(equipeVendasRua)

function nomeEquipe (names){
    return (`${names[0].nome}, ${names[1].nome}, ${names[2].nome} e ${names[3].nome}`)
}

const nomeEquipe1 = nomeEquipe(equipeVendaOnline)
const nomeEquipe2 = nomeEquipe(equipeVendasRua)
    
function mostreMetas (meta, equipe,nom){
    if (meta >= 3000){
        console.log(`Parabéns equipe de vendas ${equipe}, vocês bateram a meta do dia, agradecemos: ${nom} pela dedicação!`)
    }else {
        console.log(`Equipe de vendas ${equipe}, não bateram a meta hoje, bora continuar tentando.`)
    }
    
}

mostreMetas(meta1, "Online", nomeEquipe1)
mostreMetas(meta2, "Rua", nomeEquipe2)