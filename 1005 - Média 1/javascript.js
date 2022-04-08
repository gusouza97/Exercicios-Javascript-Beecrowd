(function ReadyJS(win, doc){
    'use strict';

    // Selectores
    let inputs = document.getElementsByName('numero');
    let btn = document.querySelector('.btn');
    let result = document.querySelector('.result');

    // Listeners
    btn.addEventListener('click', calcularMedia, false);

    // Functions
    function calcularMedia(event){
        result.textContent = "";

        let arr = new Array();

        for(let i = 0; i < inputs.length; i++){
            arr[i] = parseFloat(inputs[i].value);
        }

        // Realizando o calculo da nota
        let resultado = ((arr[0] * 3.5) + (arr[1] * 7.5)) / (3.5 + 7.5);

        const p = document.createElement('p');
        p.textContent = "Média do aluno: " + resultado;
        result.appendChild(p);
    }
    
})(window, document);