import _ from 'underscore';
import {valorCarta , pedirCarta ,crearDeck} from './usecases'
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
//import {creardeck as crearnuevo deck para trabajar en esta carpeta sin modificar }
let deck = [];

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


// Crear deck inicial
deck = crearDeck(tipos, especiales);


// Pedir carta



// Obtener valor de la carta


// Turno computadora
const turnoComputadora = (puntosMinimos) => {

    do {

        const carta = pedirCarta(deck);

        puntosComputadora += valorCarta(carta);

        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));



    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');

        } else if (puntosMinimos > 21) {
            alert('Computadora gana');

        } else if (puntosComputadora > 21) {
            alert('Jugador gana');

        } else {
            alert('Computadora gana');
        }

    }, 100);
}



// Evento pedir carta
btnPedir.addEventListener('click', () => {


    const carta = pedirCarta(deck);

    puntosJugador += valorCarta(carta);

    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');

    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {

        console.warn('Perdiste');

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);

    } else if (puntosJugador === 21) {

        console.warn('21!');

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);
    }

});



// Evento detener
btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);

});



// Evento nuevo juego
btnNuevo.addEventListener('click', () => {

    console.clear();

    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});