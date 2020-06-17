const nome = 'Thais'
const sexo = 'F'
const idade = 50
const cont = 35

const calcContribuicao = idade + cont

const homePodeAposentar = sexo == 'M' && idade >= 35 && calcContribuicao >=95
const mulherPodeAposentar = sexo == 'F' && idade >= 30 && calcContribuicao >=85

//soma idade+contribuição valida para aposentar: "H"==95 "F"==85

// Teste01
/*if ((sexo == 'F') && idade + cont >= 85) {
   if ((sexo == 'M') && idade + cont >= 95) {
    console.log(nome + ' você já pode se aposentar')
   }else {
    console.log(nome + ' você ainda não pode se aposentar')
   }*/
   
   // Correção
   if(homePodeAposentar || mulherPodeAposentar) {
       console.log(`${nome}, você já pode aposentar`)
   }else {
       console.log(`${nome}, você ainda não pode aposentar`)
   }
   
    
