(function ReadyJS(win, doc){
    'use strict';

    let peca1 = {
        codigo: 0,
        quantidade: 0,
        valUnitario: 0
    }

    let peca2 = {
        codigo: 0,
        quantidade: 0,
        valUnitario: 0
    }

    peca1.codigo = parseInt(prompt("Digite o codigo da peca 1"));
    peca1.quantidade = parseInt(prompt("Digite a quantitdade da peca 1"));
    peca1.valUnitario = parseFloat(prompt("Digite o valor unitario da peca 1"));

    peca2.codigo = parseInt(prompt("Digite o codigo da peca 2"));
    peca2.quantidade = parseInt(prompt("Digite a quantitdade da peca 2"));
    peca2.valUnitario = parseFloat(prompt("Digite o valor unitario da peca 2"));

    let calcularTotal = function calc(peca1, peca2){
        return (peca1.quantidade * peca1.valUnitario) + (peca2.quantidade * peca2.valUnitario);
    }

    alert("O valor total a pagar é de U$: " + calcularTotal(peca1, peca2));

})(window, document);