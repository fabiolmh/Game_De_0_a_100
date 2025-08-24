alert('DESCUBRA O NÚMERO QUE ESTOU PENSANDO!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute = Number(prompt('Escolha um número entre 1 e 100'));
let tentativas = 1;
// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    if (chute > numeroSecreto)
        chute = Number(prompt('Tente novamente! O número secreto é MENOR do que: ' + chute));
    else if (chute < numeroSecreto)
        chute = prompt('Tente novamente! O número secreto é MAIOR do que: ' + chute);
    tentativas++;
}    

//utilizando o operador ternário para definir se a palvra do último alert é singular ou plural.
let palavraTentativa = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA'

alert('PARABÉNS! VOCÊ ACERTOU. O NÚMERO QUE EU PENSEI FOI ' + numeroSecreto);
alert('VOCÊ PRECISOU DE ' + tentativas + ' ' + palavraTentativa + ' PARA ACERTAR.')