(function readyJS(win, doc){
    'use strict';

    let array = new Array(4);

    for(let i = 0; i < array.length; i++){
        array[i] = parseInt(prompt("Digite o valor inteiro"));
    }

    let verificaNums = function check(array){
        if(array[1] > array[2] && array[3] > array[0] && array[2]+array[3] > array[0]+array[1] && array[2] > 0 && array[3] > 0 && array[0] % 2 == 0){
            return "valores aceitos";
        }else{
            return "valores nao aceitos";
        }
    }

    alert(verificaNums(array));

})(window, document);