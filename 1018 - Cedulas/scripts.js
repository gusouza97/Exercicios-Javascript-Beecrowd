(function ReadyJS(win, doc){
    'use strict';

    // Declaracao de Variaveis
    let valor = parseInt(prompt("Digite o valor inteiro"));

    // Functions

    let calcularCedulas = function calc(valor){
        let cedulas = {
            c100: 0,
            c50: 0,
            c20: 0,
            c10: 0,
            c5: 0,
            c2: 0,
            c1: 0
        }

        do{
            if(valor >= 100){
                cedulas.c100 = parseInt(valor / 100);
                valor = valor - (cedulas.c100 * 100);
            }else if(valor >= 50){
                cedulas.c50 = parseInt(valor / 50);
                valor = valor - (cedulas.c50 * 50);
            }else if(valor >= 20){
                cedulas.c20 = parseInt(valor / 20);
                valor = valor - (cedulas.c20 * 20);
            }else if(valor >= 10){
                cedulas.c10 = parseInt(valor / 10);
                valor = valor - (cedulas.c10 * 10);
            }else if(valor >= 5){
                cedulas.c5 = parseInt(valor / 5);
                valor = valor - (cedulas.c5 * 5);
            }else if(valor >= 2){
                cedulas.c2 = parseInt(valor / 2);
                valor = valor - (cedulas.c2 * 2);
            }else if(valor >= 1){
                cedulas.c1 = parseInt(valor / 1);
                valor = valor - (cedulas.c1 * 1);
            }
        }while(valor > 0);

        return cedulas;
    }

    // Apresentando resultados

    let cedulas = calcularCedulas(valor);

    alert("O calculo das cedulas ficou \n"+
        "Valor: " + valor + "\n" +
        cedulas.c100 + " nota(s) de R$ 100,00 \n" +
        cedulas.c50 + " nota(s) de R$ 50,00 \n" +
        cedulas.c20 + " nota(s) de R$ 20,00 \n" +
        cedulas.c10 + " nota(s) de R$ 10,00 \n" +
        cedulas.c5 + " nota(s) de R$ 5,00 \n" +
        cedulas.c2 + " nota(s) de R$ 2,00 \n" +
        cedulas.c1 + " nota(s) de R$ 1,00"
    );

})(window, document);