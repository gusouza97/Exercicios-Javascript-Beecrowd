(function ReadyJS(win, doc){
    'use strict';

    // Selectors
    let calcButton = document.querySelector('button');
    let num1 = document.querySelector('.num1');
    let num2 = document.querySelector('.num2');
    let result = document.querySelector('.result');

    // Listeners
    calcButton.addEventListener('click', calcular);
    num1.addEventListener('change', filtrarNumeros);

    // Functions
    function calcular(event){
        result.textContent = "";
        //Impede envio do formulario
        event.preventDefault();

        if(num1.value != "" && num2.value != ""){
            
            const soma = parseInt(num1.value) + parseInt(num2.value);

            const p = document.createElement("p");
            p.textContent = "Resultado: " + soma;
            result.appendChild(p);

        }else{
            result.innerHTML = "Digite os valores";
        }
    }
    
})(window, document);