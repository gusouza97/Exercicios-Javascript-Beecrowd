(function ReadyJS(win, doc){
    'use strict';

    // Selectors
    let numbers = document.getElementsByName('numero');
    let btn = document.querySelector('.btn');
    let result = document.querySelector('.result');

    // Listeners
    btn.addEventListener('click', calcularResultado, false);

    // Functions
    function calcularResultado(e){
        result.textContent = "";
        
        let resultado = ((parseFloat(numbers[0].value) * parseFloat(numbers[1].value)) - (parseFloat(numbers[2].value) * parseFloat(numbers[3].value)));

        const p = document.createElement('p');
        p.textContent = "Diferença: " + resultado;
        result.appendChild(p);
    }


})(window, document);