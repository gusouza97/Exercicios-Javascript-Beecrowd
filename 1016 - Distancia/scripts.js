(function ReadyJS(win, doc){
    'use strict';

    let km = parseFloat(prompt("Digite a distancia que deseja calcular"));

    let calcularMinutos = function calc(km){
        return km * 2;
    }

    alert("O tempo necessario para o carro Y atingir essa distancia é " + calcularMinutos(km));

})(window, document);