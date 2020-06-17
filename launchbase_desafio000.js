const nome  = 'Carlos';
const idade =  40;
const altura = 1.88;
const peso = 90;

const imc = peso / (altura * altura);

if (!(imc >=30) || imc < 29.9){
    console.log(nome + ' você não esta acima do peso')
} else {
    console.log(nome + ' você esta acima do peso')
}

