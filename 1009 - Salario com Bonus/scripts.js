(function ReadyJS(win, doc) {
    'use strict';

    let nomeVendedor = prompt("Digite o nome do vendedor");
    let salarioFixo = parseFloat(prompt("Digite o seu salario fixo"));
    let totalVendas = parseFloat(prompt("Digite o total de vendas efetuadas no mes em dinheiro"));

    let calcularSalarioBonus = function calc(salarioFixo, totalVendas){
        return (totalVendas * 0.15) + salarioFixo;
    }

    alert("O vendedor com nome de " + nomeVendedor + " recebera este mes U$ " + calcularSalarioBonus(salarioFixo, totalVendas));

})(window, document);