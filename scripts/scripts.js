var h2_01 = document.getElementById("h2_a")
var h2_02 = document.getElementById("h2_b")
var botao1 = document.getElementById("botao1")
var botao2 = document.getElementById("botao2")

function startGame() {
    if(iniciarOgame == false){
        clicarNaoInicial;
    }else{
        clicarSimInicial();
    }
}

function clicarSimInicial() {
    h2_01.innerHTML = `<img src=./images/casa.png>`
    h2_02.innerHTML = `É um domingo de sol você está em casa e tem trabalho do curso para realizar. Seu amigos te chamaram para ir para praia e você precisa decidir: Continuar em casa ou sair de casa?`
    botao1.onclick = ficaEmCasa
    botao2.onclick = sairDeCasa
}

function clicarNaoInicial() {
    h2_01.innerHTML = `<img src=./images/gameOver.png>`
    h2_02.innerHTML = `Sério que você vai desistir? Vamos tentar outra vez?`
    botao1.onclick = startGame
    botao2.onclick = gameOver
}
     
function sairDeCasa() {
    h2_01.innerHTML = `<img src=./images/casa.png>`
    h2_02.innerHTML = `Você decidiu ir praia e deixar para fazer o trabalho mais tarde, decida como você vai: Sair de carro ou ir de onibus?`
    botao1.onclick = sairDeCarro
    botao2.onclick = sairDeOnibus
}

function sairDeCarro() {
    h2_01.innerHTML = `<img src=./images/carro.png>`
    h2_02.innerHTML = `Você decidiu ir de carro, agora deve decidir: Não beber e voltar um pouco mais cedo ou beber com seus amigos?`
    botao1.onclick = naoBeber
    botao2.onclick = beber
}

function naoBeber() {
    h2_01.innerHTML = `<img src=./images/praia.png>`
    h2_02.innerHTML = `Você decidiu não beber e voltar mais cedo para casa, mas esta cansado da praia agora deve decidir: Fazer o trabalho ou não fazer o trabalho?`
    botao1.onclick = naoBeber
    botao2.onclick = beber
}

function beber() {
    h2_01.innerHTML = `<img src=./images/preso.png>`
    h2_02.innerHTML = `Você foi parado em uma blitz e preso!`
    botao1.onclick = gameOver
}

function sairDeOnibus(){
    h2_01.innerHTML = `<img src=./images/onibus.png>`
    h2_02.innerHTML = `Você decidiu ir de onibus e se divertiu bastante, agora deve decidir: Voltar um pouco mais cedo e fazer o trabalho ou ficar até mais tarde com seus amigos?`
    botao1.onclick = voltar
    botao2.onclick = naoFazerTrabalho
}

function voltar(){
    h2_01.innerHTML = `<img src=./images/casa.png>`
    h2_02.innerHTML = `Você decidiu voltar mais cedo mas esta cansado da praia agora deve decidir: Você vai fazer o trabalho ou não?`
    botao1.onclick = voltar
    botao2.onclick = naoFazerTrabalho
}

function naoFazerTrabalho(){
    h2_01.innerHTML = `<img src=./images/demitido.png>`
    h2_02.innerHTML = `Você não entregou o trabalho e foi demitido!`
    botao1.onclick = gameOver
}

function fazerTrabalho(){
    h2_01.innerHTML = `<img src=./images/venceu.png>`
    h2_02.innerHTML = `Você se divertiu e entregou o seu trabalho. Parabéns você venceu! Você deseja jogar novamente?`
    botao1.onclick = startGame
    botao2.onclick = gameOver
}

function ficaEmCasa(){
    h2_01.innerHTML = `<img src=./images/casa.png>`
    h2_02.innerHTML = `Você decidiu ficar em casa, agora deve decidir: Chamar os amigos para uma festinha em casa ou ver um filme sozinho?`
    botao1.onclick = filme
    botao2.onclick = festinha
}

function filme(){
    h2_01.innerHTML = `<img src=./images/filme.png>`
    h2_02.innerHTML = `Você decidiu ver um filme, mas ficou com sono. Você vai fazer o trabalho ou vai dormir?`
    botao1.onclick = fazerTrabalho
    botao2.onclick = dormir
}

function dormir(){
    h2_01.innerHTML = `<img src=./images/demitido.png>`
    h2_02.innerHTML = `Você não entregou o trabalho e foi demitido!`
    botao1.onclick = gameOver
}

function festinha(){ 
    h2_01.innerHTML = `<img src=./images/festinha.png>`
    h2_02.innerHTML = `Você decidiu fazer uma festinha, bebeu muito e não esta muito bem. Você vai fazer o trabalho ou não?`
    botao1.onclick = fazerTrabalho
    botao2.onclick = naoFazerTrabalho
}

function gameOver() {
    h2_01.innerHTML = `<img src=./images/gameOver.png>`
    h2_02.innerHTML = `Game Over, quer jogar de novo ?`
    botao1.onclick = startGame
}