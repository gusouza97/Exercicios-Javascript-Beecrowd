(function ReadyJS(win, doc){
    'use strict';

    let tempo = parseFloat(prompt("Digite o tempo gasto em horas"));
    let velocidadeMedia = parseFloat(prompt("Digite a velocidade media"));

    let calcularCombustivel = function(tempo, velocidadeMedia){
        return velocidadeMedia * tempo / 12;
    }
    
    alert("O total de combustivel gasto foi de " + calcularCombustivel(tempo, velocidadeMedia).toFixed(3));

})(window, document);