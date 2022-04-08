(function readyJS(win, doc){
    'use strict';

    // Selectors
    let inputs = document.getElementsByName('numero');
    let btn = document.querySelector('.btn');
    let result = document.querySelector('.result');

    // Listeners
    btn.addEventListener('click', calcularProduto, false);

    // Functions
    function calcularProduto(event){
        result.textContent = "";

        let resultado = 0;

        for(let i = 0; i < inputs.length; i++){
            resultado = resultado + parseInt(inputs[i].value);
        }

        const p = document.createElement('p');
        p.textContent = 'Produto: ' + resultado;
        result.appendChild(p);
    }

})(window, document);