(function ReadyJS(win, doc){
    'use strict';

    const pi = 3.14159;
    let raio = parseFloat(prompt("Digite o raio da esfera"));

    let calcularVolume = function calc(raio){
        return (4 / 3) * pi * (raio ** 3);
    }

    alert("O volume é de " + calcularVolume(raio));

})(window, document);