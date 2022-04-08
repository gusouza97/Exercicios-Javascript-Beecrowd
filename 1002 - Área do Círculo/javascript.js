(function ReadyJS(win, doc){
    'use strict';

    // Selectors
    let input = document.querySelector('.valor');
    let btn = document.querySelector('.btn');
    let result = document.querySelector('.result');

    // Listeners
    btn.addEventListener('click', calcularArea);

    // Functions
    function calcularArea(event){

        result.textContent = "";

        const pi = 3.14159;
        const resultado = (pi * (input.value * input.value)).toFixed(3);

        const p = document.createElement('p');
        p.textContent = "Area do Circulo: " + resultado;
        result.appendChild(p);
    }


})(window, document);