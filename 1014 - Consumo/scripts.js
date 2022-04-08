(function ReadyJS(win, doc){
    'use strict';

    let distancia = parseFloat(prompt("Digite a distancia percorrida pelo carro"));
    let combustivel = parseFloat(prompt("Digite o valor de combustivel gasto"));

    let calcularCombustivel = function calc(distancia, combustivel){
        return distancia / combustivel;
    }

    alert("O valor de combustivel gasto foi de " + calcularCombustivel(distancia, combustivel));

})(window, document);