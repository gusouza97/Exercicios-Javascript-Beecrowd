(function ReadyJS(win, doc){
    'use strict';

    let ageDays = parseInt(prompt("Digite sua idade em dias"));

    let calcularIdade = function calc(ageDays){
        let idade = {
            years: 0,
            months: 0,
            days: 0
        }

        idade.years = ageDays / 365;
        idade.months =  idade.years - parseInt(idade.years);
        idade.years = parseInt(idade.years);
        idade.months = idade.months * 12;

        idade.days = idade.months - parseInt(idade.months);
        idade.months = parseInt(idade.months);
        idade.days = idade.days * 30;
        idade.days = parseInt(idade.days) + 1;

        return idade;
    }

    let data = calcularIdade(ageDays);

    alert(data.years + " ano(s) \n" +
          data.months + " mes(es) \n" +
          data.days + " dia(s) \n"
    );

})(window, document);