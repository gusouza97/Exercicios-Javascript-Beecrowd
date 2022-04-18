(function readyJS(win, doc){
    'use strict';

    // Declarando as variaveis
    let arr = new Array()
    arr = [0, 0, 0]
    
    // Cadastrando valores na array com o MAP
    const array = arr.map((item, index) => {
        return item = parseFloat(prompt("Digite o valor " + parseInt(index + 1)))
    })

    // ------------------------  Functions de calculo -------------------------------------
    // Realizando o calculo do delta
    const calcDelta = (array) => {
        const delta = ((array[1] ** 2) - 4 * array[0] * array[2])
        return delta
    }

    // Realizando o calculo de Bhaskara
    const calcBhaskara = (delta) => {
        let resultado = {
            x1: 0,
            x2: 0
        }

        if(array[0] == 0 || delta < 0){
            resultado.x1 = "Impossivel calcular"
            resultado.x2 = "Impossivel calcular"
            
            return resultado
        }

        // Realizando o calculo de Bhaskara
        resultado.x1 = (-1 * array[1] + Math.sqrt(delta)) / (2 * array[0])
        resultado.x2 = (-1 * array[1] - Math.sqrt(delta)) / (2 * array[0])

        return resultado
    }

    // Chamando a funcao de calculo de Bhaskara
    const calcularResultado = (array) => {
        let delta = calcDelta(array);
        let resultado = calcBhaskara(delta)
    
         return resultado
    }
    
    // Apresentando resultado para o usuario
    let resultado = calcularResultado(array)
    
    alert("x1 " + resultado.x1 + "\n" +
                    "x2 " + resultado.x2 )

})(window, document)