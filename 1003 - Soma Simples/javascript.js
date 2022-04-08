(function(win, doc){
    'use strict';

    // Selectores
    let numeros = document.getElementsByName('numero');
    let btn = document.querySelector('.btn');
    let result = document.querySelector('.result');

    // Listeners
    btn.addEventListener('click', calcularSoma, false);

    // Functions
    function calcularSoma(event){
        result.textContent = "";

        let resultado = 0;

        // Coletando Dados
        for(let i = 0; i < numeros.length; i++){
            resultado = parseInt(numeros[i].value) + resultado;
        }

        // Inserindo resultado na pagina do usuario
        const p = document.createElement('p');
        p.textContent = 'Soma: ' + resultado;
        result.appendChild(p);
    }

})(window, document);