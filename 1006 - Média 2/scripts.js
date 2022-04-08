(function ReadyJS(win, doc){
    'use strict';

    let nota1 = parseFloat(prompt("Digite a primeira nota"));
    let nota2 = parseFloat(prompt("Digite a segunda nota"));
    let nota3 = parseFloat(prompt("Digite a terceira nota"));

    let calcularMediaPonderada = function calc(nota1, nota2, nota3){
        return ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / (2 + 3 + 5);
    }

    alert("A media deste aluno ficou " + calcularMediaPonderada(nota1, nota2, nota3));

})(window, document);