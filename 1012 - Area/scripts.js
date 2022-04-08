(function ReadyJS(win, doc){
    'use strict';

    const pi = 3.14159;
    let a = parseFloat(prompt("Digite o tamanho de A"));
    let b = parseFloat(prompt("Digite o tamanho de B"));
    let c = parseFloat(prompt("Digite o tamanho de C"));

    let calcularAreaTriangulo = function calc(a, c){
        return (a * c) / 2;
    }

    let calcularAreaCirculo = function calc(c){
        return pi * (c ** 2);
    }

    let calcularAreaTrapezio = function calc(a, b, c){
        return ((a + b) * c) / 2;
    }

    let calcularAreaQuadrado = function calc(b){
        return b * b;
    }

    let calcularAreaRetangulo = function calc(a, b){
        return a * b;
    }

    alert(
        "Area Retangulo: " + calcularAreaTriangulo(a, c) + "\n" +
        "Area Circulo: " + calcularAreaCirculo(c) + "\n" +
        "Area Trapezio: " + calcularAreaTrapezio(a, b, c) + "\n" +  
        "Area Quadrado: " + calcularAreaQuadrado(b) + "\n" + 
        "Area Retangulo: " + calcularAreaRetangulo(a, b) + "\n" 
    );

})(window, document);