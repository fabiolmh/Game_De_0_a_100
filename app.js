//Variaveis globais: Numero a ser gerado automaticamente e chute passado pelo cliente, tentativas jogadas e lista de números que já foram sorteados
let numeroSorteado = [];;
let numeroSecreto = gerarNumeroAleatorio();
let chute;
let tentativas = 0;


//Gerar numero aleatorio assim que o programa for iniciado
function gerarNumeroAleatorio(){
    let listaNumeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeDeElementosNaLista = listaNumeroEscolhido.length;

    if (quantidadeDeElementosNaLista == 3){
        listaNumeroEscolhido = [];
    }

    if (numeroSorteado.includes(listaNumeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        numeroSorteado.push(listaNumeroEscolhido);
        console.log(numeroSorteado);
        return listaNumeroEscolhido;
    }
}

//Função que exibe textos na tela
function exibirTextoTela(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.4});
}

//Função para limpar campo de texto do chute
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

//Reiniciar jogo (Função do botão novo jogo)
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//Mensagem inicial
function mensagemInicial(){
    exibirTextoTela('h1', 'DE 0 A 100');
    exibirTextoTela('p', 'Acerte e beba!');
}

//Inicialização do programa
mensagemInicial();

function verificarChute(){
        tentativas++
        pluralSingularTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensagem = `Número: ${numeroSecreto}. | Jogadas: ${tentativas} ${pluralSingularTentativa}.`
        chute = parseInt(document.querySelector('input').value);
        if (chute === numeroSecreto ){
            exibirTextoTela('h1', 'Você bebeu!');
            exibirTextoTela('p', mensagem);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else if (chute > numeroSecreto && chute < 101){
            exibirTextoTela('h1', 'Tente novamente!');
            exibirTextoTela('p', `O número é MENOR que ${chute}`);
            limparCampo();
        }
        else if (chute < numeroSecreto && chute > 0){
            exibirTextoTela('h1', 'Tente novamente!');
            exibirTextoTela('p', `O número é MAIOR que ${chute}`);
            limparCampo();
        }
        else{
            exibirTextoTela('h1', 'DIGITE UM NÚMERO VÁLIDO!!');
            exibirTextoTela('h1', 'NÃO SEJA ESTUPIDO');
            limparCampo();
        }
}

 