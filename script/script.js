var jogo = "";
var rodada = 1;
var botao = document.querySelector('button#recomeçar');
var casa = [];
for (let i = 0; i < 9; i++) {
    casa.push(document.querySelector('div#casa' + i));
}  
        
function jogar(C) {
    if (casa[C].textContent == "") {
        let jogador = rodada % 2 === 0? 'O' : 'X'; 
        casa[C].innerHTML = jogador;
        rodada++;
    }
    
    if (casa[0].textContent == 'X' && casa[1].textContent == 'X' && casa[2].textContent == 'X' || casa[0].textContent == 'O' && casa[1].textContent == 'O' && casa[2].textContent == 'O') {
        for (var i = 0; i < 3; i++) {
            casa[i].style.color = 'white';
        }
        for (var i = 0; i < 9; i++) {
            casa[i] = 'FIM';
        }
    }
    if (casa[3].textContent == 'X' && casa[4].textContent == 'X' && casa[5].textContent == 'X' || casa[3].textContent == 'O' && casa[4].textContent == 'O' && casa[5].textContent == 'O') {
        for (var i = 3; i < 6; i++) {
            casa[i].style.color = 'white';
        }
        for (var i = 0; i < 9; i++) {
            casa[i] = 'FIM';
        }
    }
    if (casa[6].textContent == 'X' && casa[7].textContent == 'X' && casa[8].textContent == 'X' || casa[6].textContent == 'O' && casa[7].textContent == 'O' && casa[8].textContent == 'O') {
        for (var i = 6; i < 9; i++) {
            casa[i].style.color = 'white';
        }
        for (var i = 0; i < 9; i++) {
            casa[i] = 'FIM';
        }
    }
    if (casa[0].textContent == 'X' && casa[3].textContent == 'X' && casa[6].textContent == 'X' || casa[0].textContent == 'O' && casa[3].textContent == 'O' && casa[6].textContent == 'O') {
        for (var i = 0; i < 9; i += 3) {
            casa[i].style.color = 'white';
        }
        for (var i = 0; i < 9; i++) {
            casa[i] = 'FIM';
        }
    }
    if (casa[1].textContent == 'X' && casa[4].textContent == 'X' && casa[7].textContent == 'X' || casa[1].textContent == 'O' && casa[4].textContent == 'O' && casa[7].textContent == 'O') {
        for (var i = 1; i < 9; i += 3) {
            casa[i].style.color = 'white';
        }
        for (var i = 0; i < 9; i++) {
            casa[i] = 'FIM';
        }
    }
    if (casa[2].textContent == 'X' && casa[5].textContent == 'X' && casa[8].textContent == 'X' || casa[2].textContent == 'O' && casa[5].textContent == 'O' && casa[8].textContent == 'O') {
        for (var i = 2; i < 9; i += 3) {
            casa[i].style.color = 'white';
        }
        for (var i = 0; i < 9; i++) {
            casa[i] = 'FIM';
        }
    }
    if (casa[0].textContent == 'X' && casa[4].textContent == 'X' && casa[8].textContent == 'X' || casa[0].textContent == 'O' && casa[4].textContent == 'O' && casa[8].textContent == 'O') {
        for (var i = 0; i < 9; i += 4) {
            casa[i].style.color = 'white';
        }
        for (var i = 0; i < 9; i++) {
            casa[i] = 'FIM';
        }
    }
    if (casa[2].textContent == 'X' && casa[4].textContent == 'X' && casa[6].textContent == 'X' || casa[2].textContent == 'O' && casa[4].textContent == 'O' && casa[6].textContent == 'O') {
        for (var i = 2; i < 8; i += 2) {
            casa[i].style.color = 'white';
        }
        for (var i = 0; i < 9; i++) {
            casa[i] = 'FIM';
        }
    }
}

function recomeçar() {
    for (var i = 0; i < 9; i++) {
        casa[i] = document.querySelector('div#casa' + i);
    }
    for (var i = 0; i < 9; i++) {
        casa[i].innerHTML = "";
        casa[i].style.color = "black";
    }
    rodada = 1;
}

botao.addEventListener('click', recomeçar);