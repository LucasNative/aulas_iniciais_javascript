 /*====================================================================

 Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado EMPRESA 
 Os dados a serem armazenados são:
 
 Nome: Rocketseat

 Cor: Roxo

 Foco: Programação

 Endereço:
     Rua: Rua Guilherme Gembala
     Número: 260
     ====================================================================*/

     const empresa = {
         nome: 'Rocketseat',

         cor: 'Roxo',

         foco: 'Programação',

         endereço: {
             Rua: 'Rua Guilherme Gembala',
             numero: 260
         }
     }; 

     console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.Rua}, ${empresa.endereço.numero}.`)




     /* ======EXEMPLO DE SOLUÇÃO DA ROCKETSEAT=====
     Construção e impressão de objetos

const usuario = {
    nome: 'Diego',
    empresa: {
        nome: "Rocketseat",
        cor: "roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)*/