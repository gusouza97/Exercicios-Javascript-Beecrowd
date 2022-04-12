(function readyJS(win,doc){
    'use strict';

    // Selectores
    let valor = document.getElementsByName('numero');
    let btn = document.querySelector('.btn');
    let result = document.querySelector('.result');

    // Listeners
    btn.addEventListener('click', calcularSalario, false);

    // Functions
    function calcularSalario(e){
        result.textContent = "";

        const salario = valor[1].value * valor[2].value;

        const p = document.createElement('p');
        p.textContent = "Salario: " + salario;
        result.appendChild(p);
    }

})(window, document);