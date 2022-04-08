(function ReadyJS(win, doc){
    'use strict';

    let tempoSeg = parseInt(prompt("Digite o valor do tempo em segundos"));

    let calcularTempo = function calc(tempoSeg){
        
        let horario = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        if(tempoSeg <= 60){
            horario.hours = 0;
            horario.minutes = 0;
            horario.seconds = tempoSeg;
        }else{
            horario.minutes = tempoSeg / 60;
            horario.hours = horario.minutes / 60;

            horario.minutes = horario.hours - parseInt(horario.hours);
            horario.hours = parseInt(horario.hours);

            horario.minutes = horario.minutes * 60;

            horario.seconds = horario.minutes - parseInt(horario.minutes);
            horario.minutes = parseInt(horario.minutes);

            horario.seconds = parseInt(horario.seconds * 60);
        }
        return horario;
    }

    let horario = calcularTempo(tempoSeg);

    alert("A converso do tempo deu: " + horario.hours + ":" + horario.minutes + ":" + horario.seconds);

})(window, document);