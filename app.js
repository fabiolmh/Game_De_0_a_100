let numeroSecreto = gerarNumeroaleatorio();

function exibirTextoTela(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto; 
}

exibirTextoTela('h1', 'DE 0 A 100');
exibirTextoTela('p', 'Acerte o número e beba!');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    console.log(numeroSecreto);
}

function gerarNumeroaleatorio(){
    return parseInt(Math.random() * 100 + 1);
}