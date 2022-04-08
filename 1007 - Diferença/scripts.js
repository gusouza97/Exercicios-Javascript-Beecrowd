(function ReadyJS(win, doc){
    'use strict';

    let a = parseInt(prompt('Digite o primeiro numero'));
    let b = parseInt(prompt("Digite o segundo numero"));
    let c = parseInt(prompt("Digite o terceiro numero"));
    let d = parseInt(prompt("Digite o quarto numero"));

    let calcularDiferenca = function calc(a, b, c, d){
        return (a * b) - (c * d);
    }

    alert("A diferenca entre os produtos eh de " + calcularDiferenca(a,b,c,d));

})(window, document);