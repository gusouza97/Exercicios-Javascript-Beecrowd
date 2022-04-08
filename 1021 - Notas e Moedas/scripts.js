(function ReadyJS(win, doc){
    'use strict';

    let valor = parseFloat(prompt("Digite o valor")).toFixed(2);

    let calcularNotas = function(valor){

        let money = {
            cedulas: [0, 0, 0, 0, 0, 0],
            moedas: [0, 0, 0, 0, 0, 0]
        }

            if(valor >= 100){
                money.cedulas[0] = parseInt(valor / 100);
                valor = valor - (parseFloat(money.cedulas[0]) * 100);
            }if(valor >= 50){
                money.cedulas[1] = parseInt(valor / 50);
                valor = valor - (parseFloat(money.cedulas[1]) * 50);
            }if(valor >= 20){
                money.cedulas[2] = parseInt(valor / 20);
                valor = valor - (parseFloat(money.cedulas[2]) * 20);
            }if(valor >= 10){
                money.cedulas[3] = parseInt(valor / 10);
                valor = valor - (parseFloat(money.cedulas[3]) * 10);
            }if(valor >= 5){
                money.cedulas[4] = parseInt(valor / 5);
                valor = valor - (parseFloat(money.cedulas[4]) * 5);
            }if(valor >= 2){
                money.cedulas[5] = parseInt(valor / 2);
                valor = valor - (parseFloat(money.cedulas[5]) * 2);
            }if(valor >= 1){
                money.moedas[0] = parseInt(valor / 1);
                valor = valor - (parseFloat(money.moedas[0]) * 1);
            }if(valor >= 0.5){
                money.moedas[1] = parseInt(valor / 0.5);
                valor = valor - (parseFloat(money.moedas[1]) * 0.5);
            }if(valor >= 0.25){
                money.moedas[2] = parseInt(valor / 0.25);
                valor = valor - (parseFloat(money.moedas[2]) * 0.25);
            }if(valor >= 0.10){
                money.moedas[3] = parseInt(valor / 0.10);
                valor = valor - (parseFloat(money.moedas[3]) * 0.10);
            }if(valor >= 0.05){
                money.moedas[4] = parseInt(valor / 0.05);
                valor = valor - (parseFloat(money.moedas[4]) * 0.05);
            }if(valor >= 0.01){
                money.moedas[5] = parseInt(valor / 0.01);
                valor = valor - (parseFloat(money.moedas[5]) * 0.01);
            }                                                            

        return money;
    }

     // Apresentando resultados

     let cash = calcularNotas(valor);

     alert("O calculo do dinheiro ficou \n" +
         "Valor: " + valor + "\n" +
         "Notas \n"+
         cash.cedulas[0] + " nota(s) de R$ 100,00 \n" +
         cash.cedulas[1] + " nota(s) de R$ 50,00 \n" +
         cash.cedulas[2] + " nota(s) de R$ 20,00 \n" +
         cash.cedulas[3] + " nota(s) de R$ 10,00 \n" +
         cash.cedulas[4] + " nota(s) de R$ 5,00 \n" +
         cash.cedulas[5] + " nota(s) de R$ 2,00 \n" +
         "Moedas \n" +
         cash.moedas[0] + " moeda(s) de R$ 1,00 \n" +
         cash.moedas[1] + " moeda(s) de R$ 0,50 \n" +
         cash.moedas[2] + " moeda(s) de R$ 0,25 \n" +
         cash.moedas[3] + " moeda(s) de R$ 0,10 \n" +
         cash.moedas[4] + " moeda(s) de R$ 0,05 \n" +
         cash.moedas[5] + " moeda(s) de R$ 0,01 \n" 
         );

})(window, document);