'use strict';

const sons= {
    'A':'industrial.wav.mp3',
    'S':'velha.wav.mp3',
    'D':'zumbido.wav.mp3',
    'F':'eletrico.wav.mp3',
    'G':'grave.wav.mp3'

}

const criarDiv= (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.testeContent = texto;
    div.id= texto;
    document.getElementById('container').appendChild('div');
}

const exibir= (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

const adicionarEfeito= (letra) => document.getElementById(letra)
                                          .classList.add('active');

const removerEfeito= (letra) => {
    const div= document.getElementById(letra);
    const removeActive= () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}
                                          

const ativarDiv= (evento) => {

    const letra= evento.type= 'click'? evento.target.id : evento.key.toUpperCase();
    
    const letraPermitida= sons.hasOwnProperty(letra);
    if (letraPermitida) {
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv)