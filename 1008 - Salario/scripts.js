(function ReadyJS(win, doc){
    'use strict';

    let numFunc = parseInt(prompt("Digite o numero do funcionario"));
    let horasTrab = parseInt(prompt("Digite o numero de horas trabalhadas no mes"));
    let valHora = parseFloat(prompt("Digite o valor que vc recebe por hora"));

    let calcularSalario = function calc(horasTrab, valHora){
        return horasTrab * valHora;
    }

    alert("O funcionario com numero " + numFunc + " recebe um salario de U$ " + calcularSalario(horasTrab, valHora));

})(window, document);