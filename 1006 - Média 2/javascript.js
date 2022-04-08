(function readyJS(win, doc){
    'use strict';

    // Selectors
    let inputs = document.getElementsByName('numero');
    let btn = document.querySelector('.btn');
    let result = document.querySelector('.result');

    // Listeners
    btn.addEventListener('click', calcularMedia, false);

    // Functions
    function calcularMedia(event){
        result.textContent = "";
        let resultado = ((parseFloat(inputs[0].value * 2)) + (parseFloat(inputs[1].value) * 3) + (parseFloat(inputs[2].value) * 5)) / (2 + 3 + 5);
        
        const p = document.createElement('p');
        p.textContent = "Media: " + resultado.toFixed(2);
        result.appendChild(p);
    }

})(window, document);