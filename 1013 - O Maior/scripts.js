(function ReadyJS(win, doc){
    'use strict';

    let arrNums = new Array();

    for(let i = 0; i < 10; i++){
        arrNums[i] = parseFloat(prompt("Digite o valor [" + parseInt(i+1) + "]"));
    }

    let numMaior = arrNums.reduce(
        function verifyElements(v1, v2, ind, arr){
            if(v1 > v2){
                return v1;
            }else{
                return v2;
            }
        }
    )

    alert("O maior numero é " + numMaior);

})(window, document);