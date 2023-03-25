function tocaSom(seletorAudio) {
   const element =  document.querySelector(seletorAudio);
    if(element && element.localName === 'audio') {
        element.play();
    } else {
        alert("elemento nao encontrado"); 
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (event) {
        if(event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}