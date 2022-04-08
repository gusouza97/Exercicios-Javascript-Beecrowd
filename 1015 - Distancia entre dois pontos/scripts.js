(function ReadyJS(win, doc){
    'use strict';

    // Variables

    let ponto1 = new Array();
    let ponto2 = new Array();

    // Functions
    let recebendoPontos = function rec(){

        let result = new Array();

        for(let i = 0; i < 2; i++){
            result[i] = parseFloat(prompt("Digite o valor de ponto " + parseInt(i+1)));
        }
        return result;
    }
    
    let calcularDistancia = function calc(ponto1, ponto2){
        return Math.sqrt(((ponto2[0] - ponto1[0]) ** 2) + ((ponto2[1] - ponto1[1]) ** 2))
    }

    // Results e Capturings

    ponto1 = recebendoPontos();
    ponto2 = recebendoPontos();

    alert("A distancia entre os dois pontos é " + calcularDistancia(ponto1, ponto2));

})(window, document);