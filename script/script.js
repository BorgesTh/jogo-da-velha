var rodando = true;
var rodada = 1;
var botao = document.querySelector('button#recomeçar');
var casa = [];
for (let i = 0; i < 9; i++) {
    casa.push(document.querySelector('div#casa' + i));
}  
    
function VerificaVencedor(player) {

    const iguais = valor => casa[valor].textContent === player;
    
    for (let i = 0; i < 3; i++) {   
        let linha = [i * 3 + 0, i * 3 + 1, i * 3 + 2]
        if (linha.every(iguais)) return linha;
    }

    for (let i = 0; i < 3; i++) {
        let coluna = [i, i + 3, i + 6];
        if (coluna.every(iguais)) return coluna;
    }

    let diagonalPrincipal = [0, 4, 8]
    if (diagonalPrincipal.every(iguais)) return diagonalPrincipal;

    let diagonalSecundaria = [2, 4, 6]
    if (diagonalSecundaria.every(iguais)) return diagonalSecundaria;

    return false;
}

function jogar(C) {

    if (!rodando) return;

    if (casa[C].textContent != "") return;
    
    let jogador = rodada % 2 === 0? 'O' : 'X'; 
    casa[C].innerHTML = jogador;
    rodada++;
    
    let vencedor = VerificaVencedor(jogador);
    if (vencedor) {
        rodando = false;
        vencedor.forEach(valor => casa[valor].style.color = "white");
    }
}

function recomeçar() {

    for (var i = 0; i < 9; i++) {
        casa[i].innerHTML = "";
        casa[i].style.color = "black";
    }
    rodada = 1;
    rodando = true;
}

botao.addEventListener('click', recomeçar);