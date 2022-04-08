(function ReadyJS(win, doc){
    'use strict';

    //let nota1 = parseFloat(prompt("Digite a primeira nota"));
    //let nota2 = parseFloat(prompt("Digite a segunda nota"));

    let calcularMediaPonderada = function calc(nota1, nota2){
        return ((nota1 * 3.5) + (nota2 * 7.5)) / (3.5 + 7.5);
    }

    //alert("A media do aluno ficou " + calcularMediaPonderada(nota1, nota2));

})(window, document);